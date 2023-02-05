import { Link } from "react-router-dom";
import "../styles/applyEdu.css";

import {
  gql,
  useMutation,
  useReactiveVar,
  useLazyQuery,
  useQuery,
} from "@apollo/client";
import React, { useEffect, useState, useRef } from "react";

import {
  appendErrors,
  Control,
  Controller,
  useFieldArray,
  useForm,
  useWatch,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { Banner } from "../components/banner";
import createEduRoute from "../images/bannerCategory/createEdu.png";
import { Helmet } from "react-helmet-async";
import infoConfirm from "../images/Frame68.svg";
import {
  SendAuthNum,
  SendAuthNumVariables,
} from "../__generated__/SendAuthNum";
import { sendOption } from "../__generated__/globalTypes";
import {
  checkAuthNumQuery,
  checkAuthNumQueryVariables,
} from "../__generated__/checkAuthNumQuery";
import DatePicker, { DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import type { Value } from "react-multi-date-picker";
import { setAppElement } from "react-modal";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { CreateEdu, CreateEduVariables } from "../__generated__/CreateEdu";
import { displayPartsToString } from "typescript";

import { ReactComponent as Delete } from "../images/delete.svg";

const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
const months = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];
const CREATE_EDU_MUTATION = gql`
  mutation CreateEdu($input: CreateEduInput!) {
    CreateEdu(input: $input) {
      error
      ok
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
interface Detail_class_item {
  class_name: string;
  edu_concept: string;
  student_number: number;
  date: Date[];
  remark: string;
  unfixed: boolean;
}

interface ICreateEduForm {
  name: string;
  institution_name: string;
  position: string;
  phone_number: string;
  email: string;
  student_count: string;
  school_rank: string;
  budget: string;
  overall_remark: string;
  detail_classes: Detail_class_item[];
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

export const MakeNewApplication = () => {
  // 질문 바뀌는 부분
  const [formNum, setformNum] = useState(0);
  // 모달창
  const [kakaoModal, setKakaoModal] = useState(false);
  const [submitModal, setSubmitModal] = useState(false);
  // 카톡 인증 카운트다운
  const [min, setMin] = useState<number>(4);
  const [sec, setSec] = useState<number>(59);
  const [authCheckModal, setAuthCheckModal] = useState(false);
  const [resend, setResend] = useState(false);
  const [isActiveTimer, setIsActiveTimer] = useState<boolean>(false);
  const [authState, setAuthState] = useState(false);
  const [sendBtnActive, setSendBtnActive] = useState(true);
  const { register, getValues, handleSubmit, formState, control, watch } =
    useForm<ICreateEduForm>({
      defaultValues: {
        detail_classes: [
          {
            class_name: "",
            edu_concept: "",
            date: [],
            remark: "",
            unfixed: false,
          },
        ],
      },
    });
  const {
    register: register_auth,
    getValues: getValues_auth,
    handleSubmit: handleSubmit_auth,
  } = useForm<IAuthForm>();

  // useEffect(() => {
  //   if (watch("phone_number").length === 11 && watch("name")) {
  //     setSendBtnActive(false);
  //   } else {
  //     setSendBtnActive(true);
  //   }
  // }, [watch()]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "detail_classes",
  });

  const [isHovering, setIsHovering] = useState(0);
  const navigate = useNavigate();

  const onCompletedCreate = (data: CreateEdu) => {
    const {
      CreateEdu: { ok, error },
    } = data;
    if (ok) {
      navigate("/");
    } else {
      console.log(error);
    }
  };

  const onCompleted = (data: SendAuthNum) => {
    console.log("oncompleted");
    const {
      SendAuthNum: { ok, error },
    } = data;
    if (ok) {
      setKakaoModal(true);
      if (resend === false) {
        setResend(true);
      }
      setIsActiveTimer(true);
    } else {
      console.log(error);
      alert("카톡 안 옴");
    }
  };

  const onSubmit_create = () => {
    const {
      name,
      institution_name,
      position,
      phone_number,
      email,
      student_count,
      school_rank,
      budget,
      overall_remark,
      detail_classes,
    } = getValues();
    // const fordateformat = getValues();
    // console.log(fordateformat);
    // fordateformat.detail_classes.map((data) => {
    //   data.date = data.date.toString();
    // });
    createEduMutation({
      variables: {
        input: {
          name,
          institution_name,
          position,
          phone_number,
          email,
          student_count,
          school_rank,
          budget,
          overall_remark,
          detail_classes,
        },
      },
    });
  };

  const onInvalid_create = () => {
    alert("교육 신청 중 오류가 발생하였습니다.");
  };

  const onInvalid_send = () => {
    try {
      const { name, phone_number } = getValues();
      console.log(name, phone_number);
      console.log("try)");
    } catch (error) {
      console.log(error);
    }
    console.log("ㅑinvalid 통과");
  };

  const check_kakao_condtion = () => {
    if (watch("phone_number").length === 11 && watch("name")) {
      onSubmit_send()
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
    console.log("submi22t");
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
    const {
      CheckAuthNum: { ok, error },
    } = data;
    console.log("dddd");
    if (ok) {
      setAuthCheckModal(true);
      setAuthState(true);
      setResend(false);
      setIsActiveTimer(false);
    } else {
      console.log(error);
      alert(error);
    }
  };

  const click_append_buttion = () => {
    const { detail_classes } = getValues();
    console.log(detail_classes);
    const detail_len = detail_classes.length;
    if (detail_len > 0) {
      append({
        class_name: detail_classes[detail_len - 1].class_name,
        edu_concept: detail_classes[detail_len - 1].edu_concept,
        student_number: detail_classes[detail_len - 1].student_number,
        date: detail_classes[detail_len - 1].date,
        remark: "",
        unfixed: false,
      });
    } else {
      append({
        class_name: "",
        edu_concept: "",
        student_number: 30,
        date: [],
        remark: "",
        unfixed: false,
      });
    }
  };

  const [createEduMutation] = useMutation<CreateEdu, CreateEduVariables>(
    CREATE_EDU_MUTATION,
    { onCompleted: onCompletedCreate }
  );

  const [sendAuthNumMutation, { data: sendAuthNum }] = useMutation<
    SendAuthNum,
    SendAuthNumVariables
  >(SEND_AUTH_NUM_MUTATION, { onCompleted });

  const [checkAuthNumQuery, { data: checkData }] = useLazyQuery<
    checkAuthNumQuery,
    checkAuthNumQueryVariables
  >(CHECK_AUTH_NUM_QUERY, { onCompleted: onCompleted_check });

  // 왼쪽 배너 기능
  const leftRef = useRef<any>(null);
  const WholeFormRef = useRef<any>(null);
  const mainFormRef = useRef<any>(null);
  const line1Ref = useRef<any>(null);
  const line2Ref = useRef<any>(null);
  const line3Ref = useRef<any>(null);
  const line4Ref = useRef<any>(null);
  const circleRef = useRef<any>(null);
  const form1Ref = useRef<any>(null);
  const form2Ref = useRef<any>(null);
  const form3Ref = useRef<any>(null);
  const form4Ref = useRef<any>(null);
  const nextRef = useRef<any>(null);

  useEffect(() => {
    let progressStyle = leftRef.current.style;
    let line1Style = line1Ref.current.style;
    let line2Style = line2Ref.current.style;
    let line3Style = line3Ref.current.style;
    let line4Style = line4Ref.current.style;

    const progressSpace = () => {
      let formLeft = mainFormRef.current.getBoundingClientRect().left;
      progressStyle = leftRef.current.style;
      line1Style = line1Ref.current.style;
      line2Style = line2Ref.current.style;
      line3Style = line3Ref.current.style;
      line4Style = line4Ref.current.style;

      // let formStyle = window.getComputedStyle(WholeFormRef.current);
      // let formMarginLeft = formStyle.getPropertyValue("margin-left");

      progressStyle.width = `${formLeft - 20}px`;

      let circleStyle = window.getComputedStyle(circleRef.current);
      let circleWidth = circleStyle.getPropertyValue("width");
      let circleBorder = circleStyle.getPropertyValue("border-left-width");

      let lineStyle = window.getComputedStyle(line1Ref.current);
      let linewidth = lineStyle.getPropertyValue("width");
      line1Style.marginLeft = `${parseFloat(circleWidth) / 2}px`;
      line2Style.marginLeft = `${parseFloat(circleWidth) / 2}px`;
      line3Style.marginLeft = `${
        parseFloat(circleWidth) / 2 -
        parseFloat(circleBorder) -
        parseFloat(linewidth) / 2
      }px`;
      line4Style.marginLeft = `${
        parseFloat(circleWidth) / 2 -
        parseFloat(circleBorder) -
        parseFloat(linewidth) / 2
      }px`;
      // console.log("border-left-width", circleStyle.getPropertyValue("border-left-width"))
      // console.log("CircleWidth", circleWidth)
      // console.log(`${parseFloat(circleWidth) / 2}px`)
      // console.log(`${parseFloat(circleWidth) / 2 - 1.5875}px`)
    };

    progressSpace();

    window.onresize = () => {
      progressSpace();
    };

    progressStyle.top = `${461.328}px`;

    window.addEventListener("scroll", () => {
      let scrollY = 461.328 + window.scrollY;
      if (scrollY <= 811.328) {
        scrollY = 461.328;
      } else {
        scrollY = scrollY - 350;
      }
      progressStyle.top = `${scrollY}px`;
    });
  });

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

  const [nextBtnActive, setNextBtnActive] = useState<boolean>(true);
  useEffect(() => {
    if (formNum === 0) {
      if (
        watch([
          "name",
          "institution_name",
          "position",
          "phone_number",
          "email",
        ]).every((item) => item !== "") &&
        authState === true
      ) {
        setNextBtnActive(false);
      } else {
        setNextBtnActive(true);
      }
    }
    if (formNum === 1) {
      if (
        watch("school_rank") !== "" &&
        !Number.isNaN(watch("budget")) &&
        !Number.isNaN(watch("student_count"))
      ) {
        setNextBtnActive(false);
      } else {
        setNextBtnActive(true);
      }
    }
    if (formNum === 2) {
      let len = watch("detail_classes").length;
      let judge = false;
      let check_num = 0;
      while (len > 0) {
        len = len - 1;
        if (
          watch([
            `detail_classes.${len}.class_name`,
            `detail_classes.${len}.edu_concept`,
          ]).every((item) => item !== "") &&
          !Number.isNaN(watch(`detail_classes.${len}.student_number`)) &&
          watch(`detail_classes.${len}.date`).length !== 0
        ) {
          check_num += 1;
        }
        if (check_num === watch("detail_classes").length) {
          judge = true;
        }
      }
      if (judge) {
        setNextBtnActive(false);
      } else {
        setNextBtnActive(true);
      }
    }
  }, [watch()]);

  return (
    <>
      {/* 모달창 */}
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
      <div className="Create-post-root">
        <Helmet>
          <title>Create | DORO</title>
        </Helmet>
        <Banner
          wid={10.278}
          route={createEduRoute}
          contentClass="Subtitle-bigFont"
          title="교육 신청"
          subtitle="Education Application"
          content="희망 교육과 문의 사항을 작성해주시면 빠르게 답변해드리겠습니다."
          rightImg="none"
        />
        <div ref={leftRef} className="Progress-container">
          <div>
            <div className="circleNum-text-box">
              <p
                ref={circleRef}
                className={
                  formNum >= 0
                    ? "circleNum circleNum-active"
                    : "circleNum circleNum-nonActive"
                }
              >
                1
              </p>
              <p className="Progress-text">신청자 정보</p>
            </div>
            <div ref={line1Ref} className="Progress-line" />

            <div className="circleNum-text-box">
              <p
                className={
                  formNum >= 1
                    ? "circleNum circleNum-active"
                    : "circleNum circleNum-nonActive"
                }
              >
                2
              </p>
              <p className="Progress-text">교육생 정보</p>
            </div>
            <div ref={line2Ref} className="Progress-line" />

            <div className="circleNum-text-box">
              <p
                className={
                  formNum >= 2
                    ? "circleNum circleNum-active"
                    : "circleNum circleNum-nonActive"
                }
              >
                3
              </p>
              <p className="Progress-text">학급별 교육 일정</p>
            </div>
            <div ref={line3Ref} className="Progress-line" />

            <div className="circleNum-text-box">
              <p
                className={
                  formNum >= 3
                    ? "circleNum circleNum-active"
                    : "circleNum circleNum-nonActive"
                }
              >
                4
              </p>
              <p className="Progress-text">교육 특이사항</p>
            </div>
            <div ref={line4Ref} className="Progress-line" />

            <div className="circleNum-text-box">
              <p
                className={
                  formNum >= 4
                    ? "circleNum circleNum-active"
                    : "circleNum circleNum-nonActive"
                }
              >
                5
              </p>
              <p className="Progress-text">최종 신청</p>
            </div>
          </div>
        </div>
        <div ref={WholeFormRef} className="CreateEdu-content-root">
          <form
            className="Create-post-form"
            ref={mainFormRef}
            onSubmit={handleSubmit(onSubmit_create, onInvalid_create)}
          >
            {submitModal ? (
              <div className="Create-post-kakao-modal-container">
                <div className="Create-post-submit-modal">
                  <p className="Create-post-kakao-modal-top">
                    교육을 신청하시겠습니까 ?
                  </p>
                  <div className="Create-post-submit-modal-bottom">
                    <p
                      style={{ letterSpacing: "0.9px" }}
                      className="Create-post-kakao-modal-bottom-text"
                    >
                      제출한 정보는 수정 가능하며, 입력해주신 정보를 기반으로
                      DORO 교육 매니저가 예산과 컨셉에 맞는 최적의 교육
                      커리큘럼을 제안 해드릴 예정이니 편하게 제출해주세요 !
                    </p>
                    <div className="Create-post-submit-modal-button-container">
                      <button
                        style={{
                          background: "#d9d9d9",
                          fontSize: "0.776rem",
                          margin: "0 0.684rem 0 0",
                        }}
                        className="Create-post-kakao-modal-button"
                        onClick={() => {
                          setSubmitModal(false);
                        }}
                      >
                        취소
                      </button>
                      <button
                        type="submit"
                        style={{ fontSize: "0.776rem", marginTop: "0" }}
                        className="Create-post-kakao-modal-button"
                        onClick={() => {}}
                      >
                        교육 신청
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div
              ref={form1Ref}
              className="Create-post-individual-form"
              style={
                formNum === 0 || formNum === 4
                  ? { display: "" }
                  : { opacity: 0, height: 0, overflow: "hidden" }
              }
            >
              <div className="CreateEdu-title">신청자 정보</div>
              <div className="Create-post-input-parent">
                <div className="Create-post-input-description-box Create-post-input-top">
                  <p className="Create-post-input-description-text">
                    신청자 성함
                  </p>
                </div>
                <div className="Create-post-input-input-box  Create-post-input-top">
                  <input
                    {...register("name", { required: true })}
                    className="Create-post-input-input-content"
                    name="name"
                    placeholder="신청자 성함"
                    readOnly={formNum === 4}
                  />
                </div>
              </div>

              <div className="Create-post-input-parent">
                <div className="Create-post-input-description-box">
                  <span className="Create-post-input-description-text">
                    소속 기관명
                  </span>
                </div>
                <div className="Create-post-input-input-box">
                  <input
                    {...register("institution_name", { required: true })}
                    name="institution_name"
                    placeholder="도로 초등학교"
                    className="Create-post-input-input-content"
                    readOnly={formNum === 4}
                  />
                </div>
              </div>

              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box">
                  <span className="Create-post-input-description-text">
                    직위
                  </span>
                </div>
                <div className="Create-post-input-input-box">
                  <input
                    {...register("position", { required: true })}
                    name="position"
                    placeholder="진로 선생님"
                    className="Create-post-input-input-content"
                    readOnly={formNum === 4}
                  />
                </div>
              </div>

              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box">
                  <span className="Create-post-input-description-text">
                    휴대폰 번호
                  </span>
                </div>
                <div className="Create-post-input-description-flex">
                  <input
                    {...register("phone_number", {
                      required: true,
                    })}
                    name="phone_number"
                    placeholder="01012345678"
                    className="Create-post-input-phoneNum"
                    readOnly={formNum === 4}
                    onChange={() => {
                      if (authState === true) {
                        setAuthState(false);
                      }
                      if (resend === true) {
                        setResend(false);
                      }
                      if (isActiveTimer) {
                        setIsActiveTimer(false);
                      }
                    }}
                  />
                  {!resend ? (
                    <button
                      type="button"
                      className="Create-post-input-phoneNum-button"
                      onClick={() => {
                        // const kakaoCheck_name = getValues("name");
                        // const kakaoCheck_phone = getValues("phone_number");
                        check_kakao_condtion();
                      }}
                      // disabled={sendBtnActive || formNum === 4}
                      disabled={formNum === 4}
                    >
                      카카오톡 인증
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="Create-post-input-phoneNum-button"
                      style={{ color: "#777777", fontSize: "0.859rem" }}
                      disabled={formNum === 4}
                      onClick={() => {
                        onSubmit_send();
                      }}
                    >
                      인증번호 재전송
                    </button>
                  )}
                </div>
              </div>

              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box">
                  <p className="Create-post-input-description-text">
                    카카오톡 인증
                  </p>
                </div>
                <div className="Create-post-input-description-flex">
                  <input
                    {...register_auth("authNum", { required: true })}
                    name="authNum"
                    placeholder="인증번호 입력"
                    className="Create-post-input-phoneNum"
                    readOnly={formNum === 4}
                  />
                  <button
                    type="button"
                    className="Create-post-input-phoneNum-button-auth"
                    style={{ color: authState ? "#0072B9" : "" }}
                    onClick={handleSubmit_auth(onSubmit_check)}
                    disabled={formNum === 4}
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

              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box">
                  <span className="Create-post-input-description-text">
                    이메일
                  </span>
                </div>
                <div className="Create-post-input-input-box">
                  <input
                    {...register("email", {
                      required: true,
                      validate: (email: string) => email.includes("@"),
                    })}
                    name="email"
                    placeholder="E-Mail"
                    className="Create-post-input-input-content"
                    readOnly={formNum === 4}
                  />
                </div>
              </div>
            </div>

            {/* 교육생 정보 */}
            <div
              ref={form2Ref}
              className="Create-post-individual-form"
              style={
                formNum === 1
                  ? { display: "" }
                  : formNum === 4
                  ? { marginTop: "6.3rem" }
                  : { opacity: 0, height: 0, overflow: "hidden" }
              }
            >
              <div className="CreateEdu-title">교육생 정보</div>
              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box  Create-post-input-top">
                  <span className="Create-post-input-description-text">
                    교육 학생 수
                  </span>
                </div>
                <div className="Create-post-input-input-box  Create-post-input-top">
                  <input
                    {...register("student_count", {
                      required: true,
                      valueAsNumber: true,
                    })}
                    type="number"
                    className="Create-post-input-input-content"
                    name="student_count"
                    placeholder="총 학생 수를 입력해주세요."
                    readOnly={formNum === 4}
                  />
                </div>
              </div>

              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box">
                  <span className="Create-post-input-description-text">
                    학생 정보
                  </span>
                </div>
                <div className="Create-post-input-input-box">
                  <input
                    {...register("school_rank", { required: true })}
                    name="school_rank"
                    placeholder="초등학교 1학년, 3학년"
                    className="Create-post-input-input-content"
                    readOnly={formNum === 4}
                  />
                </div>
              </div>

              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box">
                  <span className="Create-post-input-description-text">
                    교육 예산
                  </span>
                </div>
                <div className="Create-post-input-input-box">
                  <input
                    {...register("budget", {
                      required: true,
                      valueAsNumber: true,
                    })}
                    name="budget"
                    placeholder="교육 커리큘럼 제안에 활용되는 정보입니다."
                    className="Create-post-input-input-content"
                    readOnly={formNum === 4}
                  />
                </div>
              </div>
            </div>

            <div
              ref={form3Ref}
              className="Create-post-individual-form"
              style={
                formNum === 2
                  ? { display: "" }
                  : formNum === 4
                  ? { marginTop: "6.3rem" }
                  : { opacity: 0, height: 0, overflow: "hidden" }
              }
            >
              <div className="CreateEdu-title">학급별 교육 일정</div>
              <div className="classInfo-container">
                {fields.map((field, index) => {
                  return (
                    <div key={field.id} className="classInfo-box">
                      <section className={"section"} key={field.id}>
                        <div className="classInfo-subtitle-container">
                          <div className="classInfo-subtitle">학급 정보</div>
                          {/* {index !== 0 && ( */}
                          <button
                            type="button"
                            onClick={() => remove(index)}
                            disabled={formNum === 4}
                          >
                            <Delete style={{ width: "0.833rem" }} />
                          </button>
                          {/* )} */}
                        </div>

                        <div className="classInfo-topInfo-container">
                          <span className="classInfo-topInfo-font">
                            학급 이름
                          </span>
                          <input
                            className="classInfo-topInfo-input"
                            placeholder="6학년 3반"
                            {...register(
                              `detail_classes.${index}.class_name` as const,
                              {
                                required: true,
                              }
                            )}
                            name={`detail_classes.${index}.class_name`}
                            readOnly={formNum === 4}
                          />
                        </div>
                        <div className="classInfo-topInfo-container">
                          <span className="classInfo-topInfo-font">
                            교육 컨셉
                          </span>
                          <input
                            className="classInfo-topInfo-input"
                            placeholder="AI, 로봇"
                            {...register(
                              `detail_classes.${index}.edu_concept` as const,
                              {
                                required: true,
                              }
                            )}
                            name={`detail_classes.${index}.edu_concept`}
                            readOnly={formNum === 4}
                          />
                        </div>
                        <div className="classInfo-topInfo-container">
                          <span className="classInfo-topInfo-font">
                            학생 수
                          </span>
                          <input
                            className="classInfo-topInfo-input"
                            placeholder="120"
                            type="number"
                            {...register(
                              `detail_classes.${index}.student_number` as const,
                              {
                                valueAsNumber: true,
                                required: true,
                              }
                            )}
                            name={`detail_classes.${index}.student_number`}
                            readOnly={formNum === 4}
                          />
                        </div>
                        <div className="classInfo-topInfo-container">
                          <span className="classInfo-topInfo-font">
                            교육 날짜
                          </span>
                          <Controller
                            control={control}
                            name={`detail_classes.${index}.date`}
                            render={(props) => (
                              <>
                                <DatePicker
                                  style={{
                                    fontFamily: "Pretendard",
                                    border: "solid 1px var(--doro-light-grey)",
                                    borderRadius: "4px",
                                    height: "2rem",
                                    paddingLeft: "0.778rem",
                                    width: "192.6px",
                                  }}
                                  disabled={formNum === 4}
                                  onChange={(e) => props.field.onChange(e)}
                                  minDate={new Date()}
                                  weekDays={weekDays}
                                  format="YYYY/MM/DD"
                                  months={months}
                                  multiple
                                  plugins={[<DatePanel sort="date" />]}
                                />
                              </>
                            )}
                          />
                        </div>
                        <div className="classInfo-date-addExplanation">
                          (다회차 교육인 경우 복수 선택 해주세요)
                        </div>
                        <div>
                          <div className="classInfo-bottomInfo-title">
                            희망 교육 시간
                          </div>
                          <textarea
                            className="classInfo-bottomInfo-input"
                            placeholder="희망하시는 교육 시간을 적어주세요.&#13;&#10;미정 일시 하단 체크박스를 체크해주세요."
                            {...register(
                              `detail_classes.${index}.remark` as const
                            )}
                            name={`detail_classes.${index}.remark`}
                            readOnly={formNum === 4}
                          />
                        </div>
                        <div className="classInfo-checkbox-container">
                          <input
                            className="classInfo-checkbox"
                            {...register(
                              `detail_classes.${index}.unfixed` as const
                            )}
                            name={`detail_classes.${index}.unfixed`}
                            type="checkbox"
                            readOnly={formNum === 4}
                          />
                          <span className="classInfo-checkbox-text">
                            교육 시간 미정
                          </span>
                        </div>
                      </section>
                    </div>
                  );
                })}
              </div>
              <button
                className="classInfo-addClass-box"
                type="button"
                onClick={() => click_append_buttion()}
                disabled={formNum === 4}
              >
                + 학급 추가
              </button>
            </div>

            <div
              ref={form4Ref}
              className="Create-post-individual-form"
              style={
                formNum === 3
                  ? { display: "" }
                  : formNum === 4
                  ? { marginTop: "6.3rem" }
                  : { opacity: 0, height: 0, overflow: "hidden" }
              }
            >
              <div className="CreateEdu-title">교육 특이사항</div>

              <div className=" Create-post-input-textarea-parent">
                <div className="Create-post-input-textarea-span-box Create-post-input-top">
                  <span className="Create-post-input-description-text">
                    교육 특이사항
                  </span>
                </div>
                <div className="Create-post-input-textarea-div Create-post-input-top">
                  <textarea
                    {...register("overall_remark")}
                    name="overall_remark"
                    placeholder="교육 특이사항을 입력해주세요"
                    className="Create-post-textarea"
                    readOnly={formNum === 4}
                  />
                </div>
              </div>
            </div>

            <div className="Create-post-next-button-container">
              <div className="Create-post-next-button-parent">
                {formNum === 0 || formNum === 4 ? (
                  ""
                ) : (
                  <button
                    type="button"
                    className="Create-post-button"
                    style={{
                      background: "#d9d9d9",
                      color: "#0072b9",
                      marginRight: "1rem",
                    }}
                    onClick={() => {
                      setformNum(formNum - 1);
                    }}
                  >
                    이전
                  </button>
                )}

                {formNum === 4 ? (
                  ""
                ) : (
                  <button
                    ref={nextRef}
                    type="button"
                    className="Create-post-button"
                    style={
                      nextBtnActive === false
                        ? { background: "#0072b9", color: "#fff" }
                        : { background: "#d9d9d9", color: "#0072b9" }
                    }
                    onClick={() => {
                      setformNum(formNum + 1);
                    }}
                    disabled={nextBtnActive}
                  >
                    다음
                  </button>
                )}
              </div>
            </div>

            <div className="Create-post-submit-button-parent">
              {formNum === 4 ? (
                <>
                  <button
                    type="button"
                    className="Create-post-button"
                    style={{
                      background: "#D9D9D9",
                      color: "#005C97",
                      marginRight: "1.111rem",
                    }}
                    onClick={() => {
                      setformNum(formNum - 1);
                    }}
                  >
                    수정 하기
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitModal(true);
                    }}
                    className={`${
                      true
                        ? "Create-post-submit-button-on"
                        : "Create-post-submit-button-off"
                    }`}
                  >
                    {/* {loading ? (
    <span className="Create-post-submit-text">로딩 중</span>
  ) : ( */}
                    교육 신청
                    {/* )} */}
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
