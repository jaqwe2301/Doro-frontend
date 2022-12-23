import { Link, useNavigate } from "react-router-dom";
import "../styles/applyEdu.css";

import {
  gql,
  useMutation,
  useReactiveVar,
  useLazyQuery,
  useQuery,
} from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  appendErrors,
  Control,
  Controller,
  useFieldArray,
  useForm,
  useWatch,
} from "react-hook-form";
import { isLoggedInVar } from "../apollo";
import { Banner } from "../components/banner";
import { createEdu, createEduVariables } from "../__generated__/createEdu";
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
import DatePicker from "react-multi-date-picker";
import { setAppElement } from "react-modal";

const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

const CREATE_EDU_MUTATION = gql`
  mutation createEdu($createEduInput: CreateEduInput!) {
    CreateEdu(CreateEduInput: $createEduInput) {
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
  date: string;
  remark: string;
  unfixed: boolean;
}

interface ICreateEduForm {
  name: string;
  institution_name: string;
  position: string;
  phone_number: string;
  email: string;
  student_count: number;
  school_rank: string;
  budget: number;
  overall_remark: string;
  detail_classes: Detail_class_item[];
}

interface ICreateEduForm {
  name: string;
  institution_name: string;
  position: string;
  phone_number: string;
  email: string;
  student_count: number;
  school_rank: string;
  budget: number;
  overall_remark: string;
  detail_classes: Detail_class_item[];
}

interface ISendAuthNumForm {
  name: string;
  phoneNumber: string;
  Option: sendOption;
}

interface ICheckAuthForm {
  authNum: string;
  phoneNumber: string;
}

export const ShowApplication = () => {
  const [startDate, setapplyDate] = useState(new Date());
  const navigate = useNavigate();
 
  const navigateToMakeNewApplication = () => {
    navigate("/makeNewApplication");
  };

  const navigateToShowApplication = () => {
      navigate("/showApplication");
    };
  const { register, getValues, handleSubmit, formState, control } =
    useForm<ICreateEduForm>({
      defaultValues: {
        detail_classes: [
          {
            class_name: "",
            edu_concept: "",
            date: "",
            remark: "",
            unfixed: false,
          },
        ],
      },
    });
  const {
    register: register_send,
    getValues: getValues_send,
    handleSubmit: handleSubmit_send,
  } = useForm<ISendAuthNumForm>();
  const {
    register: register_check,
    getValues: getValues_check,
    handleSubmit: handleSubmit_check,
  } = useForm<ICheckAuthForm>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "detail_classes",
    rules: {
      minLength: 1,
    },
  });

  const [isHovering, setIsHovering] = useState(0);

  const onCompleted = (data: SendAuthNum) => {
    console.log("oncompleted");
    const {
      SendAuthNum: { ok, error },
    } = data;
    console.log("dddd");
    if (ok) {
      alert("카톡 왔는지 확인");
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

    createEduMutation({
      variables: {
        createEduInput: {
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
      const { name, phoneNumber } = getValues_send();
      console.log(name, phoneNumber);
      console.log("try)");
    } catch (error) {
      console.log(error);
    }
    console.log("ㅑinvalid 통과");
  };

  const onSubmit_send = () => {
    const { name, phoneNumber } = getValues_send();
    console.log(name, phoneNumber);
    console.log("submit");
    try {
      sendAuthNumMutation({
        variables: {
          input: {
            name,
            phoneNumber,
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
    const { authNum, phoneNumber } = getValues_check();
    checkAuthNumQuery({
      variables: {
        input: {
          authNum,
          phoneNumber,
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
      alert("인증번호 일치 , 확인 완료 ");
    } else {
      console.log(error);
      alert(error);
    }
  };

  const click_append_buttion = () => {
    const { detail_classes } = getValues();
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
        date: "",
        remark: "",
        unfixed: false,
      });
    }
  };

  const [createEduMutation] = useMutation<createEdu, createEduVariables>(
    CREATE_EDU_MUTATION
  );

  const [sendAuthNumMutation, { data: sendAuthNum }] = useMutation<
    SendAuthNum,
    SendAuthNumVariables
  >(SEND_AUTH_NUM_MUTATION, { onCompleted });

  const [checkAuthNumQuery, { data: checkData }] = useLazyQuery<
    checkAuthNumQuery,
    checkAuthNumQueryVariables
  >(CHECK_AUTH_NUM_QUERY, { onCompleted: onCompleted_check });

  return (
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
        <div className="typeSelect-container">
            <button onClick={navigateToMakeNewApplication} className="typeSelect-button">
                교육 신청하기
            </button>
            <button onClick={navigateToShowApplication} className="typeSelect-button">
                교육 신청내역 확인하기
            </button>          
        </div>
      <div className="CreateEdu-content-root">
        <div className="CreateEdu-title">교육 신청 내역 확인하기</div>
        <form
          className="Create-post-form"
          onSubmit={handleSubmit(onSubmit_create, onInvalid_create)}
        >
          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">
                신청자 성함
              </span>
            </div>
            <div className="Create-post-input-input-box">
              <input
                {...register("name", { required: true })}
                {...register_send("name", { required: true })}
                className="Create-post-input-input-content"
                name="name"
                placeholder="신청자 성함"
              />
            </div>
          </div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">
                휴대폰 번호
              </span>
            </div>
            <div>
              <input
                {...register_send("phoneNumber", { required: true })}
                // {...register("phone_number", { required: true })}
                {...register_check("phoneNumber", { required: true })}
                name="phoneNumber"
                placeholder="01012345678"
                // className="Create-post-input-input-content"
              />

              <button
                className="Create-post-input-input-content"
                onClick={handleSubmit_send(onSubmit_send, onInvalid_send)}
              >
                카카오톡 인증
              </button>
            </div>
          </div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">
                카카오톡 인증
              </span>
            </div>
            <div>
              <input
                {...register_check("authNum", { required: true })}
                name="authNum"
                placeholder="인증번호 입력"
              />
              <button
                className="Create-post-input-input-content"
                onClick={handleSubmit_check(onSubmit_check)}
              >
                인증 하기
              </button>
            </div>
          </div>

        </form>

        <div className="h-screen Posts-container">
          <div style={{ fontSize: "0.778rem", marginBottom: "0.583rem" }}>
            <span>총 </span>
            <span style={{ color: "#005c97" }}>
            </span>
            <span>건</span>
          </div>
          <>
            <div className="Posts-postlist w-full flex flex-col">
            </div>
          </>

          <div className="flex items-center justify-between Posts-bottom-container">
            <div className="Posts-empty"></div>
            <div className="Posts-pagination-container">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};