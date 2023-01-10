import { Link, useNavigate } from "react-router-dom";
import "../styles/applyEdu.css";

import { gql, useMutation, useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
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

export const ShowApplication = () => {
  const navigate = useNavigate();

  const navigateToMakeNewApplication = () => {
    navigate("/makeNewApplication");
  };

  const navigateToShowApplication = () => {
    navigate("/showApplication");
  };

  const {
    register: register_auth,
    getValues: getValues_auth,
    handleSubmit: handleSubmit_auth,
  } = useForm<IAuthForm>();

  const { register, getValues, handleSubmit } = useForm<ICheckUserForm>();

  const onCompleted = (data: SendAuthNum) => {
    console.log("oncompleted");
    const {
      SendAuthNum: { ok, error },
    } = data;
    if (ok) {
      alert("카톡 왔는지 확인");
    } else {
      console.log(error);
      alert("카톡 안 옴");
    }
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
    const {
      CheckAuthNum: { ok, error },
    } = data;
    if (ok) {
      alert("인증번호 일치 , 확인 완료 ");

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
  const editApplication = () => {
    console.log("edit");
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
      <div className="CreateEdu-content-root">
        <div className="CreateEdu-title">교육 신청 내역 확인하기</div>
        <form
          className="Create-post-form"
          // onSubmit={handleSubmit(onSubmit_create, onInvalid_create)}
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
                휴대폰 번호
              </span>
            </div>
            <div>
              <input
                {...register("phone_number", { required: true })}
                name="phone_number"
                placeholder="01012345678"
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
        </form>

        <div className="h-screen Posts-container">
          <div style={{ fontSize: "0.778rem", marginBottom: "0.583rem" }}>
            <span>총 </span>
            <span style={{ color: "#005c97" }}></span>
            <span>건</span>
          </div>
          <>
            <div className="Posts-postlist w-full flex flex-col"></div>
          </>

          <div className="flex items-center justify-between Posts-bottom-container">
            <div className="Posts-empty"></div>
            <div className="Posts-pagination-container"></div>
          </div>
        </div>
      </div>
      <div className="FindOverallClasses-result">
        <div>
          {overallClassesData?.FindOverallClasses.overallClasses?.map(
            (element, index) => (
              <div key={index}>
                <span>{element.client.institution_name}</span>
                <span>{element.createdAt}</span>
                <button onClick={editApplication}>수정하기</button>
                <button onClick={(e) => deleteApplication(element.id, e)}>
                  삭제하기
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
