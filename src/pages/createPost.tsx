import { gql, useMutation, useReactiveVar } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { Banner } from "../components/banner";
import { useMe } from "../hooks/useMe";
import { createPost, createPostVariables } from "../__generated__/createPost";
import infoConfirm from "../images/Frame68.svg";
import { Helmet } from "react-helmet-async";

// mutation 스키마
const CREATE_POST_MUTATION = gql`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      error
      ok
    }
  }
`;

interface ICreatePostForm {
  title: string;
  content: string;
  password?: string;
  ownerName: string;
  institution: string;
  phoneNumber: string;
  email: string;
  isLocked: boolean;
  agree: boolean;
}

export const CreatePost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data: userData, refetch } = useMe();
  const [isHovering, setIsHovering] = useState(0);
  const navigate = useNavigate();

  // [특정, ?, value값가져오는애, 전송 ]
  const { register, formState, getValues, handleSubmit } =
    useForm<ICreatePostForm>({
      mode: "onChange",
    });
  const onCompleted = (data: createPost) => {
    const {
      createPost: { ok, error },
    } = data;
    if (ok) {
      navigate("/posts", { replace: true, state: true });
    } else {
      console.log(error);
    }
  };

  // [ 보낼 데이터 , {data, ...}] = useMutation(스키마, 옵션)
  const [createPostMutation, { data: creataPostData, loading }] = useMutation<
    createPost,
    createPostVariables
  >(CREATE_POST_MUTATION, { onCompleted });

  const onSubmit = () => {
    // useForm에서 가져온값 - 변수에 get value로 가져온 값을 담는다
    if (!loading) {
      const {
        ownerName,
        institution,
        phoneNumber,
        email,
        title,
        content,
        password,
        isLocked,
      } = getValues();

      createPostMutation({
        //실제 보낼 데이터
        variables: {
          input: {
            ownerName,
            institution,
            phoneNumber,
            email,
            title,
            content,
            password,
            isLocked,
          },
        },
      });
    }
  };

  return (
    <div className="Create-post-root">
      <Helmet>
        <title>Create | DORO</title>
      </Helmet>
      <Banner
        routeName1="• 교육문의"
        route1=""
        title="교육문의"
        subtitle="Education inquiry"
        content="궁금하신 점이나 상담을 원하시는 부분은 언제든 문의주시면 신속하게 답변 드리도록 하겠습니다."
        contentClass="Subtitle-bigFont"
        rightImg="none"
      />
      <div className="Create-post-content-root">
        <div className="CreateEdu-content-root">
          <div className="CreateEdu-title">문의신청정보</div>
          <form className="Create-post-form" onSubmit={handleSubmit(onSubmit)}>
            <div className=" Create-post-input-parent ">
              <div className="Create-post-input-description-box Create-post-input-top">
                <span className="Create-post-input-description-text">
                  문의자 성함
                </span>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="Create-post-input-input-box Create-post-input-top">
                <input
                  {...register("ownerName", { required: true, maxLength: 4 })}
                  className="Create-post-input-input-content"
                  name="ownerName"
                  placeholder="성함 입력"
                  maxLength={4}
                  defaultValue={userData?.me.name ? userData?.me.name : ""}
                />
              </div>
            </div>
            <div className=" Create-post-input-parent">
              <div className="Create-post-input-description-box">
                <span className="Create-post-input-description-text">
                  소속 기관(학원)
                </span>
              </div>
              <div className="Create-post-input-input-box">
                <input
                  {...register("institution")}
                  name="institution"
                  placeholder="도로 초등학교"
                  className="Create-post-input-input-content"
                  defaultValue={
                    userData?.me.institution ? userData?.me.institution : ""
                  }
                />
              </div>
            </div>

            <div className=" Create-post-input-parent">
              <div className="Create-post-input-description-box">
                <span className="Create-post-input-description-text">
                  연락처
                </span>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="Create-post-input-input-box">
                <input
                  {...register("phoneNumber", { required: true })}
                  name="phoneNumber"
                  placeholder="하이픈(-) 없이 숫자만 입력"
                  className="Create-post-input-input-content"
                  defaultValue={
                    userData?.me.institution ? userData?.me.institution : ""
                  }
                />
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
                  {...register("email")}
                  name="email"
                  placeholder="이메일 주소 입력"
                  className="Create-post-input-input-content"
                  // sdefaultValue={userData?.me.email ? userData?.me.email : ""}
                />
              </div>
            </div>

            <div className=" Create-post-input-parent">
              <div className="Create-post-input-description-box">
                <span className="Create-post-input-description-text">
                  비밀글
                </span>
              </div>
              <div className="Create-post-input-input-box-checkbox">
                <input
                  {...register("isLocked")}
                  name="isLocked"
                  className="Create-post-input-checkbox  w-6 h-6 ml-4 mt-2"
                  type={"checkbox"}
                />
              </div>
            </div>

            <div className=" Create-post-input-parent">
              <div className="Create-post-input-description-box">
                <span className="Create-post-input-description-text">
                  게시글 비밀번호
                </span>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="Create-post-input-input-box">
                <input
                  {...register("password", { required: true })}
                  name="password"
                  className="Create-post-input-input-content"
                  placeholder="글 삭제 및 수정시 필요합니다"
                />
              </div>
            </div>

            <div style={{marginTop: "5.5rem"}} className="CreateEdu-title">문의내용</div>

            <div className=" Create-post-input-parent">
              <div className="Create-post-input-description-box Create-for-border">
                <span className="Create-post-input-description-text">
                  글 제목
                </span>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="Create-post-input-input-box Create-for-border">
                <input
                  {...register("title", { required: true })}
                  name="title"
                  maxLength={30}
                  className="Create-post-input-input-content"
                  placeholder=""
                />
              </div>
            </div>

            <div className=" Create-post-input-textarea-parent">
              <div className="Create-post-input-textarea-span-box">
                <span className="Create-post-input-description-text">
                  글 내용
                </span>
                <span style={{ color: "red" }}> *</span>
              </div>
              <div className="Create-post-input-textarea-div">
                <textarea
                  {...register("content", { required: true })}
                  name="content"
                  placeholder="문의 내용을 입력해주세요"
                  className="Create-post-textarea"
                />
              </div>
            </div>

            <div
              className="Create-post-input-parent-notification"
              onMouseOver={() => setIsHovering(1)}
              onMouseOut={() => setIsHovering(0)}
            >
              <div className="Create-post-input-title-notification"></div>
              <div className="Create-post-input-input-box-notification">
                <div className=" create-post-notification-checkbox-parent">
                  <div className="Create-post-agree-checkbox-parent flex flex-row justify-center">
                    <input
                      {...register("agree", { required: true })}
                      className="Create-post-agree-checkbox"
                      name="agree"
                      type={"checkbox"}
                    />
                    <span className="Create-post-agree-notification">
                      본인은 [개인정보 수집 및 이용에 관한 동의] 내용을
                      확인하였으며 동의합니다.
                    </span>
                  </div>

                  <div className="Create-post-agree-info-confirm-parent">
                    {isHovering ? (
                      <img src={infoConfirm} alt="info"></img>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className=" Create-post-submit-button-parent">
              <button
                className={`${
                  formState.isValid
                    ? "Create-post-submit-button-on"
                    : "Create-post-submit-button-off"
                }`}
              >
                {loading ? (
                  <span className="Create-post-submit-text">로딩 중</span>
                ) : (
                  <span className="Create-post-submit-text">접수하기</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
