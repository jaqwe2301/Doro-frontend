import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/applyEdu.css";

import { gql, useMutation, useLazyQuery } from "@apollo/client";
import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";

import { Banner } from "../components/banner";

import createEduRoute from "../images/bannerCategory/createEdu.png";
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

  const check_kakao_condtion = () => {
    if (watch("phone_number").length === 11 && watch("name")) {
      onSubmit_send();
    } else {
      if (!watch("name")) {
        alert("성함을 입력해주십시오.");
      } else if (watch("phone_number").length !== 11) {
        alert("휴대폰 번호를 다시 확인하십시오.");
      } else {
        alert("성함과 휴대폰 번호를 입력하십시오.");
      }
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
          wid={10.278}
          route={createEduRoute}
          contentClass="Subtitle-bigFont"
          title="교육 신청"
          subtitle="Education Application"
          content="희망 교육과 문의 사항을 작성해주시면 빠르게 답변해드리겠습니다."
          rightImg="none"
        />
        <div className="typeSelect-container">
          <button
            onClick={navigateToMakeNewApplication}
            className="typeSelect-button"
          >
            교육 신청하기
          </button>
          <button
            onClick={navigateToShowApplication}
            className="typeSelect-button"
          >
            교육 신청내역 확인하기
          </button>
        </div>
        <div
          className="CreateEdu-content-root"
          style={{ marginBottom: "12rem" }}
        >
          <div className="CreateEdu-title">교육 신청 내역 확인하기</div>
          <form
            className="Create-post-form"
            // onSubmit={handleSubmit(onSubmit_create, onInvalid_create)}
          >
            <div className="Create-post-input-parent">
              <div className="Create-post-input-description-box Create-post-input-top">
                <span className="Create-post-input-description-text">
                  신청자 성함
                </span>
              </div>
              <div className="Create-post-input-input-box Create-post-input-top">
                <input
                  {...register("name", { required: true })}
                  className="Create-post-input-input-content"
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
                  className="Create-post-input-phoneNum"
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
                  className="Create-post-input-phoneNum-button-auth"
                  style={{ color: authState ? "#0072B9" : "" }}
                  disabled={authState}
                  onClick={handleSubmit_auth(onSubmit_check)}
                >
                  {authState ? "인증 완료" : "인증 하기"}
                </button>
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
