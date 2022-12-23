import { gql, useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Banner } from "../components/banner";
import { Button } from "../components/button";
import { PostComponent } from "../components/postComponent";
import {
  postsPageQuery,
  postsPageQueryVariables,
} from "../__generated__/postsPageQuery";
import postsRoute from "../images/postsRoute.png";
import lock from "../images/lock.png";
import Modal from "react-modal";
import {
  checkPasswordForPostOpen,
  checkPasswordForPostOpenVariables,
} from "../__generated__/checkPasswordForPostOpen";
import { setTokenSourceMapRange } from "typescript";
import { getValue } from "@testing-library/user-event/dist/utils";
import { Foot } from "../components/foot";

const POSTS_QUERY = gql`
  query postsPageQuery($input: FindAllPostsInput!) {
    findAllPosts(input: $input) {
      ok
      error
      totalPages
      totalResults
      results {
        createdAt
        title
        ownerName
        email
        id
        password
        isLocked
        comments {
          id
        }
      }
    }
  }
`;

export const CHECK_PASSWORD = gql`
  query checkPasswordForPostOpen($input: CheckPasswordInput!) {
    checkPassword(input: $input) {
      isSame
      post {
        id
        isLocked
      }
    }
  }
`;

interface IFormProps {
  page: number;
  password: string;
}

export const Posts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [modalInputPassword, setModalInputPassword] = useState(false);
  const [passwordIsWrong, setPasswordIsWrong] = useState(false);
  const [page, setPage] = useState(1);
  const [num, setNum] = useState(0);
  let notice = 0;

  const { data, loading, refetch } = useQuery<
    postsPageQuery,
    postsPageQueryVariables
  >(POSTS_QUERY, { variables: { input: { page } } });

  refetch();

  const count = data?.findAllPosts.results?.length
    ? data.findAllPosts.results?.length
    : 0;
  let arr = [];
  for (let i = 0; i < 11 - count; i++) {
    arr.push(0);
  }

  const onNextPageClick = () => setPage((current) => current + 1);
  const onPrevPageClick = () => setPage((current) => current - 1);
  const onFirstPageClick = () => setPage((current) => 1);
  const onLastPageClick = () =>
    setPage((current) =>
      data?.findAllPosts.totalPages ? data?.findAllPosts.totalPages : 1
    );
  console.log(data?.findAllPosts.results);
  refetch();
  data?.findAllPosts.results!.map(
    (post) => post.password === "doro2020" && (notice = notice + 1)
  );

  const { register, handleSubmit, getValues, reset, formState } =
    useForm<IFormProps>();

  const navigate = useNavigate();

  const openButton = (isLocked: boolean, id: number) => {
    if (isLocked) {
      setNum(id);
      reset();
      setModalIsOpen(true);
    } else {
      navigate(`/post/${id}`, { state: true });
    }
  };

  const onCheckPasswordOpenCompleted = (data: checkPasswordForPostOpen) => {
    const {
      checkPassword: { isSame },
    } = data;
    if (isSame === false) {
      reset();
      setPasswordIsWrong(true);
    } else {
      navigate(`/post/${data?.checkPassword?.post?.id}`, { state: true });
    }
  };

  const [callQueryForOpen, { data: checkData }] = useLazyQuery<
    checkPasswordForPostOpen,
    checkPasswordForPostOpenVariables
  >(CHECK_PASSWORD, { onCompleted: onCheckPasswordOpenCompleted });

  const onOpenPasswordSubmit = (id: number) => {
    const { password } = getValues();
    callQueryForOpen({
      variables: {
        input: {
          password: password + "",
          postId: +(id ?? ""),
        },
      },
    });
  };

  return (
    <div style={{}}>
      <Helmet>
        <title>Board | DORO</title>
      </Helmet>
      <Banner
        route={postsRoute}
        title="문의 게시판"
        subtitle="Education inquiry board"
        content="문의 답변을 확인할 수 있습니다."
        contentClass="Subtitle-bigFont"
        wid={10.278}
        rightImg="none"
      />
      {!loading && (
        <div className="h-screen Posts-container">
          <div style={{ fontSize: "0.778rem", marginBottom: "0.583rem" }}>
            <span>총 </span>
            <span style={{ color: "#005c97" }}>
              {data?.findAllPosts.totalResults! - notice}
            </span>
            <span>건</span>
          </div>
          <>
            <div className="Posts-postlist w-full flex flex-col">
              {data?.findAllPosts.results?.map((post, index) => (
                <>
                  {post.password === "doro2020" ? (
                    <div key={post.id} className="Posts-post-container">
                      <div className="Posts-post-left">
                        <button
                          onClick={() => openButton(post.isLocked, post.id)}
                        >
                          <span className="Posts-notice">공지</span>
                          <span className="Posts-post-title">{post.title}</span>
                          {post.isLocked === true && (
                            <img
                              src={lock}
                              alt="lock"
                              style={{
                                marginLeft: "0.792rem",
                                display: "inline",
                                width: "1rem",
                                height: "1rem",
                              }}
                            />
                          )}
                        </button>
                      </div>
                      <div className="Posts-post-right">
                        {post.comments.length !== 0 && (
                          <span className="Posts-comment">답변완료</span>
                        )}
                        <span className="Posts-username">{post.ownerName}</span>
                        <span className="Posts-date">
                          {post.createdAt.slice(0, 10)}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div key={post.id} className="Posts-post-container">
                      <div className="Posts-post-left">
                        <button
                          className="Posts-post-left-button"
                          onClick={() => openButton(post.isLocked, post.id)}
                        >
                          <span className="Posts-post-num">
                            {data.findAllPosts.totalResults
                              ? data.findAllPosts.totalResults -
                                index -
                                (page - 1) * (11 - notice)
                              : +""}
                          </span>
                          <span className="Posts-post-title">{post.title}</span>
                          {post.isLocked === true && (
                            <img
                              src={lock}
                              alt="lock"
                              style={{
                                marginLeft: "0.792rem",
                                display: "inline",
                                width: "1rem",
                                height: "1rem",
                              }}
                            />
                          )}
                        </button>
                      </div>
                      <div className="Posts-post-right">
                        {post.comments.length !== 0 && (
                          <span className="Posts-comment">답변완료</span>
                        )}
                        <span className="Posts-username">{post.ownerName}</span>
                        <span className="Posts-date">
                          {post.createdAt.slice(0, 10)}
                        </span>
                      </div>
                    </div>
                  )}
                </>
              ))}
              {data?.findAllPosts.results?.length! < 11 &&
                arr.map((_, index) => (
                  <div key={index} className="Posts-post-container"></div>
                ))}
            </div>
            <Modal
              isOpen={ModalIsOpen}
              onRequestClose={() => {
                setModalInputPassword(false);
                setModalIsOpen(false);
                setPasswordIsWrong(false);
              }}
              className="Posts-modal"
            >
              <>
                <div className="Posts-modal-container">
                  <span className="Posts-modal-title">
                    게시글 비밀번호를 입력해주세요
                  </span>
                  <form
                    onSubmit={handleSubmit(() => onOpenPasswordSubmit(num))}
                    className="Posts-modal-form"
                  >
                    {passwordIsWrong ? (
                      <input
                        {...register("password", { required: true })}
                        name="password"
                        placeholder="비밀번호가 틀렸습니다"
                        className="Posts-modal-input-error"
                        type="password"
                      />
                    ) : (
                      <input
                        {...register("password", { required: true })}
                        name="password"
                        placeholder="비밀번호를 입력해주세요"
                        className="Posts-modal-input"
                        type="password"
                      />
                    )}
                    <button className="Posts-modal-button transition-colors">
                      확인
                    </button>
                  </form>
                </div>
              </>
            </Modal>
          </>

          <div className="flex items-center justify-between Posts-bottom-container">
            <div className="Posts-empty"></div>
            <div className="Posts-pagination-container">
              <button
                onClick={onFirstPageClick}
                className="Posts-pagination-button-left"
                disabled={page > 1 ? false : true}
              >
                &laquo;
              </button>
              <button
                onClick={onPrevPageClick}
                className="Posts-pagination-button-left"
                disabled={page > 1 ? false : true}
              >
                &lsaquo;
              </button>
              <span className="Posts-pagination-button-span">{page}</span>
              <button
                onClick={onNextPageClick}
                className="Posts-pagination-button-right"
                disabled={page !== data?.findAllPosts.totalPages ? false : true}
              >
                &rsaquo;
              </button>
              <button
                onClick={onLastPageClick}
                className="Posts-pagination-button-right"
                disabled={page !== data?.findAllPosts.totalPages ? false : true}
              >
                &raquo;
              </button>
            </div>
            <div>
              <Link to="/createPost">
                <button className="Posts-create-button">교육 문의하기</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
