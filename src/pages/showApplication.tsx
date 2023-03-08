import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/applyEdu.css";

import { gql, useMutation, useLazyQuery, useReactiveVar } from "@apollo/client";
import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";

import { Banner } from "../components/banner";
import ApplyButton from "../components/applyButton";

import { Helmet } from "react-helmet-async";

import {
  SendAuthNum,
  SendAuthNumVariables,
} from "../__generated__/SendAuthNum";
import { sendOption } from "../__generated__/globalTypes";
import {
  checkAuthNumQuery,
  checkAuthNumQueryVariables,
} from "../__generated__/checkAuthNumQuery";

import {
  FindOverallClasses,
  FindOverallClassesVariables,
} from "../__generated__/FindOverallClasses";
import {
  DeleteOverallClass,
  DeleteOverallClassVariables,
} from "../__generated__/DeleteOverallClass";

import { isLoggedInVar } from "../apollo";

const FIND_OVERALL_CLASSES_QUERY = gql`
  query FindOverallClasses($input: FindOverallClassesInput!) {
    FindOverallClasses(input: $input) {
      ok
      error
      overallClasses {
        createdAt
        id
        client {
          institution_name
        }
      }
    }
  }
`;

const FIND_ALL_OVERALL_CLASSES_QUER = gql`
  query {
    overallClasses {
      createdAt
      id
      client {
        institution_name
      }
    }
  }
`;

const SEND_AUTH_NUM_MUTATION = gql`
  mutation SendAuthNum($input: SendAuthNumInput!) {
    SendAuthNum(input: $input) {
      error
      ok
    }
  }
`;

const CHECK_AUTH_NUM_QUERY = gql`
  query checkAuthNumQuery($input: CheckAuthNumInput!) {
    CheckAuthNum(input: $input) {
      ok
      error
    }
  }
`;
const DELETE_OVERALL_CLASS = gql`
  mutation DeleteOverallClass($input: DeleteOverallClassInput!) {
    DeleteOverallClass(input: $input) {
      ok
      error
    }
  }
`;

interface ICheckUserForm {
  name: string;
  phone_number: string;
}

interface IAuthForm {
  authNum: string;
}

// 카톡 인증 카운트다운

interface IUseInterval {
  (callback: () => void, interval: number): void;
}

const useInterval: IUseInterval = (callback, interval) => {
  const savedCallback = useRef<(() => void) | null>(null);
  // After every render, save the latest callback into our ref.
  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    let id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [interval]);
};

export const ShowApplication = () => {
  const navigate = useNavigate();

  const navigateToMakeNewApplication = () => {
    navigate("/makeNewApplication");
  };

  const navigateToShowApplication = () => {
    navigate("/showApplication");
  };

  // 모달창
  const [kakaoModal, setKakaoModal] = useState(false);

  // 카톡 인증 카운트다운
  const [min, setMin] = useState<number>(4);
  const [sec, setSec] = useState<number>(59);
  const [authCheckModal, setAuthCheckModal] = useState(false);
  const [resend, setResend] = useState(false);
  const [authImPosibble, setAuthImPosibble] = useState<boolean>();
  const [isActiveTimer, setIsActiveTimer] = useState<boolean>(false);
  const [authState, setAuthState] = useState(false);
  const {
    register: register_auth,
    getValues: getValues_auth,
    handleSubmit: handleSubmit_auth,
  } = useForm<IAuthForm>();

  const { register, getValues, handleSubmit, watch } =
    useForm<ICheckUserForm>();

  const onCompleted = (data: SendAuthNum) => {
    console.log("oncompleted");
    const {
      SendAuthNum: { ok, error },
    } = data;
    if (ok) {
      setResend(true);
      setKakaoModal(true);
      setIsActiveTimer(true);
      setAuthState(false);
    } else {
      console.log(error);
      alert("카톡 안 옴");
    }
  };

  const [inputCheck, setInputCheck] = useState<string>();

  const check_kakao_condtion = () => {
    setInputCheck("");
    if (watch("phone_number").length === 11 && watch("name")) {
      setInputCheck("");
      onSubmit_send();
    } else {
      if (!watch("name")) {
        setInputCheck("name");
        alert("성함을 입력해주세요.");
      } else if (watch("phone_number").length !== 11) {
        setInputCheck("phone_number");
        alert("휴대폰 번호를 다시 확인하십시오.");
      } else {
        alert("성함과 휴대폰 번호를 입력하십시오.");
      }
    }
  };

  // '인증 하기' 버튼을 눌렀을 때 휴대폰 번호 입력 후 '카카토톡 인증' 버튼을 먼저 클릭했는지 확인
  const check_auth_possible = () => {
    if (!isActiveTimer) {
      setAuthImPosibble(true);
    }
  };

  const onSubmit_send = () => {
    const { name, phone_number } = getValues();
    console.log(name, phone_number);
    console.log("submit");
    try {
      sendAuthNumMutation({
        variables: {
          input: {
            name,
            phoneNumber: phone_number,
            Option: sendOption.auth,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit_check = () => {
    const { authNum } = getValues_auth();
    const { phone_number } = getValues();
    checkAuthNumQuery({
      variables: {
        input: {
          authNum,
          phoneNumber: phone_number,
        },
      },
    });
  };

  const onCompleted_check = (data: checkAuthNumQuery) => {
    console.log("oncompleted_check");

    const { name, phone_number } = getValues();
    console.log(name, phone_number);
    const {
      CheckAuthNum: { ok, error },
    } = data;
    if (ok) {
      setAuthCheckModal(true);
      setIsActiveTimer(false);
      setAuthState(true);
      setAuthImPosibble(false);

      findOverallClasses({
        variables: {
          input: {
            name,
            phone_number,
          },
        },
      });
    } else {
      console.log(error);
      alert(error);
    }
    // 게시물 보여주기
  };

  const onFindOverallClassesCompleted = (data: FindOverallClasses) => {
    console.log(data);
    OverallClassRefetch();
  };
  const onDeleteOverallClassCompleted = () => {
    OverallClassRefetch();
  };

  const deleteApplication = (
    overallClassId: number,
    e: { preventDefault: () => void }
  ) => {
    e.preventDefault();
    console.log("delete", overallClassId);
    DeleteOverallClass({
      variables: {
        input: {
          overallClassId,
        },
      },
    });
  };
  const editApplication = (applicationId: number) => {
    navigate("/editApplication", { state: { id: applicationId } });
  };

  const [sendAuthNumMutation, { data: sendAuthNum }] = useMutation<
    SendAuthNum,
    SendAuthNumVariables
  >(SEND_AUTH_NUM_MUTATION, { onCompleted });

  const [checkAuthNumQuery, { data: checkData }] = useLazyQuery<
    checkAuthNumQuery,
    checkAuthNumQueryVariables
  >(CHECK_AUTH_NUM_QUERY, { onCompleted: onCompleted_check });

  const [
    findOverallClasses,
    { data: overallClassesData, refetch: OverallClassRefetch },
  ] = useLazyQuery<FindOverallClasses, FindOverallClassesVariables>(
    FIND_OVERALL_CLASSES_QUERY,
    { onCompleted: onFindOverallClassesCompleted }
  );

  const [DeleteOverallClass, { data: DeleteOverallClassData }] = useMutation<
    DeleteOverallClass,
    DeleteOverallClassVariables
  >(DELETE_OVERALL_CLASS, { onCompleted: onDeleteOverallClassCompleted });

  let arrayLength = overallClassesData?.FindOverallClasses.overallClasses
    ?.length as number;

  useInterval(() => {
    // logic 자리
    if (isActiveTimer) {
      if (sec > 0) {
        setSec(sec - 1);
      } else if (sec === 0) {
        if (min === 0) {
          setIsActiveTimer(false);
        } else {
          setMin(min - 1);
          setSec(59);
        }
      }
    }
  }, 1000);

  const isLoggedIn = useReactiveVar(isLoggedInVar);

  useEffect(() => {
    console.log(isLoggedIn)
  })

  return (
    <>
      {authCheckModal ? (
        <div className="Create-post-kakao-modal-container">
          <div className="Create-post-kakao-modal">
            <p className="Create-post-kakao-modal-top">인증 성공</p>
            <div className="Create-post-kakao-modal-bottom">
              <p className="Create-post-kakao-modal-bottom-text">
                인증되었습니다.
              </p>
              <button
                className="Create-post-kakao-modal-button"
                onClick={() => {
                  setAuthCheckModal(false);
                }}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="Create-post-root">
        <Helmet>
          <title>Create | DORO</title>
        </Helmet>
        {kakaoModal ? (
          <div className="Create-post-kakao-modal-container">
            <div className="Create-post-kakao-modal">
              <p className="Create-post-kakao-modal-top">인증 메시지 전송</p>
              <div className="Create-post-kakao-modal-bottom">
                <p className="Create-post-kakao-modal-bottom-text">
                  입력하신 번호의 카카오톡으로 인증번호를 발송하였습니다.
                </p>
                <button
                  className="Create-post-kakao-modal-button"
                  onClick={() => {
                    setKakaoModal(false);
                  }}
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <Banner
          routeDot1="•"
          routeName1="커뮤니티"
          route1=""
          route1Opacity={0.7}
          routeDot2="•"
          routeName2="교육 신청"
          route2="/applyEdu"
          route2Opacity={1}
          title="교육 신청"
          subtitle="Education Application"
          content="희망 교육과 문의 사항을 작성해주시면 빠르게 답변해드리겠습니다."
          contentClass="Subtitle-smallFont"
          rightImg="none"
        />

        <div
          className="CreateEdu-content-root"
          style={{ marginBottom: "12rem" }}
        >
          <ApplyButton />

          <div className="CreateEdu-title">교육 신청 내역 확인하기</div>
          <form
            className="Create-post-form"
            // onSubmit={handleSubmit(onSubmit_create, onInvalid_create)}
          >
            <div className="Create-post-input-parent">
              <div className="Create-post-input-description-box Create-post-input-top">
                <p className="Create-post-input-description-text">
                  신청자 성함
                </p>
              </div>
              <div className="Create-post-input-box Create-post-input-top">
                <input
                  {...register("name", { required: true })}
                  className={
                    inputCheck === "name"
                      ? "Create-post-input-content horizontal-shaking border-red"
                      : "Create-post-input-content"
                  }
                  name="name"
                  placeholder="신청자 성함"
                />
              </div>
            </div>

            <div className="Create-post-input-parent">
              <div className="Create-post-input-description-box">
                <span className="Create-post-input-description-text">
                  휴대폰 번호
                </span>
              </div>
              <div className="Create-post-input-description-flex">
                <input
                  {...register("phone_number", { required: true })}
                  name="phone_number"
                  placeholder="01012345678"
                  className={
                    inputCheck === "phone_number"
                      ? "Create-post-input-phoneNum  horizontal-shaking border-red"
                      : "Create-post-input-phoneNum"
                  }
                />
                {!resend ? (
                  <button
                    type="button"
                    className="Create-post-input-phoneNum-button"
                    onClick={() => {
                      check_kakao_condtion();
                      // onSubmit_send();
                    }}
                    // disabled={sendBtnActive}
                  >
                    카카오톡 인증
                  </button>
                ) : (
                  <button
                    type="button"
                    className="Create-post-input-phoneNum-button"
                    style={{ color: "#777777", fontSize: "0.859rem" }}
                    onClick={() => {
                      onSubmit_send();
                    }}
                  >
                    인증번호 재전송
                  </button>
                )}
              </div>
            </div>

            <div className="Create-post-input-parent">
              <div className="Create-post-input-description-box">
                <span className="Create-post-input-description-text">
                  카카오톡 인증
                </span>
              </div>
              <div className="Create-post-input-description-flex">
                <input
                  {...register_auth("authNum", { required: true })}
                  name="authNum"
                  placeholder="인증번호 입력"
                  className="Create-post-input-phoneNum"
                />
                <button
                  type="button"
                  className={
                    authImPosibble
                      ? "Create-post-input-phoneNum-button horizontal-shaking"
                      : "Create-post-input-phoneNum-button"
                  }
                  style={{
                    color: isActiveTimer ? "#0072B9" : "var(--doro-light-grey)",
                  }}
                  onClick={
                    !isActiveTimer
                      ? () => setAuthImPosibble(true)
                      : handleSubmit_auth(onSubmit_check)
                  }
                >
                  {authState ? "인증 완료" : "인증 하기"}
                </button>
                {authImPosibble ? (
                  <div
                    style={{
                      fontSize: "0.844rem",
                      color: "red",
                      marginLeft: "0.6rem",
                    }}
                  >
                    카카오톡 인증을 먼저 해주세요.
                  </div>
                ) : (
                  ""
                )}
                {isActiveTimer ? (
                  <div className="Create-post-input-phoneNum-button">
                    <span style={{ color: "#777777", fontSize: "1rem" }}>
                      {min === 0 && sec === 0
                        ? "인증번호 만료"
                        : `${min}:${sec < 10 ? `0${sec}` : sec}`}
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </form>

          <div className="retrieve-container">
            <div className="CreateEdu-title">교육 신청 내역</div>
            <div className="retrieve-count">
              <span style={{ fontWeight: "600" }}>총 </span>
              <span style={{ fontWeight: "600", color: "#005c97" }}>
                {arrayLength}
              </span>
              <span style={{ fontWeight: "600" }}>건</span>
            </div>
            {overallClassesData?.FindOverallClasses.overallClasses
              ?.slice(0)
              .reverse()
              .map((element, index) => {
                arrayLength = overallClassesData?.FindOverallClasses
                  .overallClasses?.length as number;
                let indexReverse = arrayLength - index;
                return (
                  <div key={index} className="retrieve-contents">
                    <p className="retrieve-index">{indexReverse}</p>
                    <p className="retrieve-font-blue">
                      {element.client.institution_name}
                    </p>
                    <p>에서 &nbsp;</p>
                    <p className="retrieve-font-blue">
                      {element.createdAt.substring(0, 4)}년{" "}
                      {element.createdAt.substring(5, 7)}월{" "}
                      {element.createdAt.substring(8, 10)}일 &nbsp;
                    </p>
                    <p style={{ marginRight: "24.6rem" }}>
                      신청하신 교육 내역 입니다.
                    </p>
                    <button
                      onClick={(e) => editApplication(element.id)}
                      className="retrieve-edit-btn"
                      style={{ marginRight: "1.889rem" }}
                    >
                      수정 하기
                    </button>
                    <button
                      onClick={(e) => deleteApplication(element.id, e)}
                      className="retrieve-edit-btn"
                    >
                      삭제
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
