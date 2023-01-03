import { Link } from "react-router-dom";
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
import DatePicker from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker";
import { setAppElement } from "react-modal";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { CreateEdu, CreateEduVariables } from "../__generated__/CreateEdu";

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

interface IAuthForm {
  authNum: string;
}

export const MakeNewApplication = () => {
  const [startDate, setapplyDate] = useState<Value>(new Date());
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
    register: register_auth,
    getValues: getValues_auth,
    handleSubmit: handleSubmit_auth,
  } = useForm<IAuthForm>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "detail_classes",
    rules: {
      minLength: 1,
    },
  });

  const [isHovering, setIsHovering] = useState(0);
  const navigate = useNavigate();

  const onCompletedCreate = (data: CreateEdu) => {
    const {
      CreateEdu: { ok, error },
    } = data;
    if (ok) {
      navigate("/showApplication", { replace: true });
    } else {
      console.log(error);
    }
  };

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
    const fordateformat = getValues();
    console.log(fordateformat);
    fordateformat.detail_classes.map((data) => {
      data.date = data.date.toString();
    });
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
          detail_classes: fordateformat.detail_classes,
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

  const onSubmit_send = (e: { preventDefault: () => void }) => {
    e.preventDefault();
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
      alert("인증번호 일치 , 확인 완료 ");
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
        date: "",
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
      <div className="CreateEdu-content-root">
        <div className="CreateEdu-title">신청자 정보</div>
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
                className="Create-post-input-input-content"
                name="name"
                placeholder="신청자 성함"
              />
            </div>
          </div>

          <div className=" Create-post-input-parent">
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
              />
            </div>
          </div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">직위</span>
            </div>
            <div className="Create-post-input-input-box">
              <input
                {...register("position", { required: true })}
                name="position"
                placeholder="진로 선생님"
                className="Create-post-input-input-content"
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
                {...register("phone_number", { required: true })}
                name="phone_number"
                placeholder="01012345678"
                // className="Create-post-input-input-content"
              />

              <button
                className="Create-post-input-input-content"
                onClick={onSubmit_send}
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
                {...register_auth("authNum", { required: true })}
                name="authNum"
                placeholder="인증번호 입력"
              />
              <button
                className="Create-post-input-input-content"
                onClick={handleSubmit_auth(onSubmit_check)}
              >
                인증 하기
              </button>
            </div>
          </div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">이메일</span>
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
              />
            </div>
          </div>

          {/* 교육생 정보 */}
          <div className="CreateEdu-title">교육생 정보</div>
          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">
                교육 학생 수
              </span>
            </div>
            <div className="Create-post-input-input-box">
              <input
                {...register("student_count", {
                  required: true,
                  valueAsNumber: true,
                })}
                type="number"
                className="Create-post-input-input-content"
                name="student_count"
                placeholder="총 학생 수를 입력해주세요."
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
                {...register("budget", { required: true, valueAsNumber: true })}
                name="budget"
                placeholder="교육 커리큘럼 제안에 활용되는 정보입니다."
                className="Create-post-input-input-content"
              />
            </div>
          </div>

          <div className="CreateEdu-title">학급별 교육 일정</div>
          <div>
            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <section className={"section"} key={field.id}>
                    <button type="button" onClick={() => remove(index)}>
                      DELETE
                    </button>
                    <div>
                      <span>학급 이름</span>
                      <input
                        placeholder="6학년 3반"
                        {...register(
                          `detail_classes.${index}.class_name` as const,
                          {
                            required: true,
                          }
                        )}
                        name={`detail_classes.${index}.class_name`}
                      />
                    </div>
                    <div>
                      <span>교육 컨셉</span>
                      <input
                        placeholder="AI, 로봇"
                        {...register(
                          `detail_classes.${index}.edu_concept` as const,
                          {
                            required: true,
                          }
                        )}
                        name={`detail_classes.${index}.edu_concept`}
                      />
                    </div>
                    <div>
                      <span>학생 수</span>
                      <input
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
                      />
                    </div>
                    <div>
                      <span>교육 날짜</span>
                      <Controller
                        control={control}
                        name={`detail_classes.${index}.date`}
                        render={(props) => (
                          <>
                            <DatePicker
                              onChange={(e) => props.field.onChange(e)}
                              minDate={new Date()}
                              weekDays={weekDays}
                              format="YYYY년 MM월 DD일"
                              months={months}
                              render={<InputIcon />}
                            />
                          </>
                        )}
                      />
                    </div>
                  </section>
                </div>
              );
            })}

            <button type="button" onClick={() => click_append_buttion()}>
              APPEND
            </button>
          </div>

          <div className="CreateEdu-title">교육 특이사항</div>

          <div className=" Create-post-input-textarea-parent">
            <div className="Create-post-input-textarea-span-box">
              <span className="Create-post-input-description-text">
                교육 특이사항
              </span>
            </div>
            <div className="Create-post-input-textarea-div">
              <textarea
                {...register("overall_remark")}
                name="overall_remark"
                placeholder="교육 특이사항을 입력해주세요"
                className="Create-post-textarea"
              />
            </div>
          </div>

          <div className=" Create-post-submit-button-parent">
            <button
              type="submit"
              className={`${
                true
                  ? "Create-post-submit-button-on"
                  : "Create-post-submit-button-off"
              }`}
            >
              {/* {loading ? (
                <span className="Create-post-submit-text">로딩 중</span>
              ) : ( */}
              <span className="Create-post-submit-text">접수하기</span>
              {/* )} */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
