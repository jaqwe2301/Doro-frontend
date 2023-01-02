import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { Banner } from "../components/banner";
import {
  findPostForPost,
  findPostForPostVariables,
} from "../__generated__/findPostForPost";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/button";
import {
  checkPassword,
  checkPasswordVariables,
} from "../__generated__/checkPassword";
import { deletePost, deletePostVariables } from "../__generated__/deletePost";
import { useMe } from "../hooks/useMe";
import {
  createComment,
  createCommentVariables,
} from "../__generated__/createComment";
import editLogo from "../images/edit.png";
import deleteLogo from "../images/delete.png";
import postsLogo from "../images/posts.png";
import { NotFound } from "./404";
import {
  findAllComments,
  findAllCommentsVariables,
} from "../__generated__/findAllComments";

export const POST_QUERY = gql`
  query findPostForPost($input: FindPostInput!) {
    findPost(input: $input) {
      ok
      error
      post {
        id
        createdAt
        title
        content
        password
        isLocked
        ownerName
        comments {
          content
        }
      }
    }
  }
`;

export const CHECK_PASSWORD = gql`
  query checkPassword($input: CheckPasswordInput!) {
    checkPassword(input: $input) {
      isSame
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($input: DeletePostInput!) {
    deletePost(input: $input) {
      ok
      error
    }
  }
`;
export const CREATE_COMMENT = gql`
  mutation createComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      ok
      error
    }
  }
`;
export const FIND_ALL_COMMENT = gql`
  query findAllComments($input: FindAllCommentsInput!) {
    findAllComments(input: $input) {
      ok
      error
      comments {
        content
      }
    }
  }
`;

export const Post = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [modalInputPassword, setModalInputPassword] = useState(false);
  const [passwordIsWrong, setPasswordIsWrong] = useState(false);
  const [deleteIsDone, setDeleteIsDone] = useState(false);
  const { register, formState, getValues, handleSubmit, reset } = useForm({
    mode: "onChange",
  });
  //get query for kakao notification
  const query = new URLSearchParams(window.location.search);
  const hashedpassword = query.get("hp");

  const { data: userData } = useMe();
  const editButton = () => {
    reset();
    setEditModalIsOpen(true);
  };
  const deleteButton = () => {
    reset();
    setDeleteModalIsOpen(true);
  };
  const { data, refetch } = useQuery<findPostForPost, findPostForPostVariables>(
    POST_QUERY,
    {
      variables: {
        input: {
          postId: +(params.id ?? ""),
        },
      },
    }
  );
  const { data: commentsData, refetch: commentsRefetch } = useQuery<
    findAllComments,
    findAllCommentsVariables
  >(FIND_ALL_COMMENT, {
    variables: {
      input: {
        postId: +(params.id ?? ""),
      },
    },
  });
  const onCheckPasswordEditCompleted = (data: checkPassword) => {
    const {
      checkPassword: { isSame },
    } = data;
    console.log(isSame);
    if (isSame === true) {
      navigate("edit", { state: true });
    } else {
      reset();
      commentsRefetch();
      setPasswordIsWrong(true);
    }
  };

  const onDeleteCompleted = (data: deletePost) => {
    console.log(data);
    if (data.deletePost.ok === true) {
      setDeleteModalIsOpen(false);
      setDeleteIsDone(true);
    }
  };
  const onDeleteCompletedClick = () => {
    console.log("deleted");
    setDeleteIsDone(false);
    navigate("/posts", { state: true });
  };
  const [deletePostMutation] = useMutation<deletePost, deletePostVariables>(
    DELETE_POST,
    { onCompleted: onDeleteCompleted }
  );

  const onCheckPasswordDeleteCompleted = (data: checkPassword) => {
    const {
      checkPassword: { isSame },
    } = data;
    if (isSame === true) {
      deletePostMutation({
        variables: {
          input: {
            postId: +(params.id ?? ""),
          },
        },
      });
    } else {
      reset();
      setPasswordIsWrong(true);
    }
  };
  const onCreateCommentCompleted = (data: createComment) => {
    if (data.createComment.ok === true) {
      refetch();
      commentsRefetch();
      console.log(commentsData?.findAllComments?.comments);
      navigate(`/post/${+(params.id ?? "")}`, { state: true });
    } else {
      console.log("error");
    }
  };
  const [callQueryForEdit] = useLazyQuery<
    checkPassword,
    checkPasswordVariables
  >(CHECK_PASSWORD, { onCompleted: onCheckPasswordEditCompleted });

  const [callQueryForDelete] = useLazyQuery<
    checkPassword,
    checkPasswordVariables
  >(CHECK_PASSWORD, { onCompleted: onCheckPasswordDeleteCompleted });

  const [createComment, { loading }] = useMutation<
    createComment,
    createCommentVariables
  >(CREATE_COMMENT, { onCompleted: onCreateCommentCompleted });

  const onEditPasswordSubmit = () => {
    const { password } = getValues();
    callQueryForEdit({
      variables: {
        input: {
          password,
          postId: +(params.id ?? ""),
        },
      },
    });
  };

  const onDeletePasswordSubmit = () => {
    const { password } = getValues();
    callQueryForDelete({
      variables: {
        input: {
          password,
          postId: +(params.id ?? ""),
        },
      },
    });
  };

  const onCommentSubmit = () => {
    const { comment } = getValues();
    createComment({
      variables: {
        input: {
          postId: +(params.id ?? ""),
          content: comment,
        },
      },
    });
  };

  return (
    <div className="parent">
      <Helmet>
        <title>Post | DORO</title>
      </Helmet>

      {(data?.findPost.ok && state) ||
      (hashedpassword && hashedpassword === data?.findPost.post?.password) ? (
        <div>
          <Banner
            routeName1="• 커뮤니티"
            routeName2="• 문의게시판"
            route1=""
            title="문의 게시판"
            subtitle="Education inquiry board"
            content="문의 답변을 확인할 수 있습니다"
            contentClass="Subtitle-bigFont"
            rightImg="none"
          />{" "}
          <div className="Education-inquiry-board_after-answer ">
            <div className=" Post-title-frame63-parent">
              <span className="Post-title ">{data?.findPost.post?.title}</span>
              <div className="Frame-63 ">
                {data?.findPost.post?.comments.length !== 0 && (
                  <div className="Post-Frame-59 ">
                    <span className="Post-answered-content">답변완료</span>
                  </div>
                )}
                <span className="Post-owner">
                  {data?.findPost.post?.ownerName}
                </span>
                <span className="Post-date">
                  {data?.findPost.post?.createdAt.slice(0, 10)}
                </span>
              </div>
            </div>
            <div className="Post-Line-2"></div>
            <div className="Post-content">
              <span className="Post-content-span">
                {data?.findPost.post?.content}
              </span>
            </div>
            <div className="Post-Line-3"></div>

            <div className="Post-Frame-67-parent">
              <div className="Post-Frame-67">
                <Modal
                  isOpen={editModalIsOpen}
                  onRequestClose={() => {
                    setModalInputPassword(false);
                    setEditModalIsOpen(false);
                    setPasswordIsWrong(false);
                  }}
                  className="Posts-modal"
                >
                  {modalInputPassword ? (
                    <>
                      <div className="Posts-modal-container">
                        <span className="Posts-modal-title">
                          게시글 비밀번호를 입력해주세요
                        </span>
                        <form
                          className="Posts-modal-form"
                          onSubmit={handleSubmit(onEditPasswordSubmit)}
                        >
                          {passwordIsWrong ? (
                            <input
                              {...register("password", { required: true })}
                              name="password"
                              placeholder="비밀번호가 틀렸습니다"
                              className="Posts-modal-input-error"
                              type="password"
                            ></input>
                          ) : (
                            <input
                              {...register("password", { required: true })}
                              name="password"
                              placeholder="비밀번호를 입력해주세요"
                              className="Posts-modal-input"
                              type="password"
                            ></input>
                          )}
                          <button className="Posts-modal-button transition-colors">
                            수정하기
                          </button>
                        </form>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="Posts-modal-container">
                        <span className="Posts-modal-title">
                          게시물을 수정하겠습니까?
                        </span>
                        <div className="Posts-modal-form">
                          <button
                            onClick={() => {
                              setModalInputPassword(true);
                            }}
                            className="Post-modal-button-yes"
                          >
                            예
                          </button>
                          <button
                            onClick={() => {
                              setEditModalIsOpen(false);
                            }}
                            className="Post-modal-button-no"
                          >
                            아니오
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </Modal>
                <button className="Post-Frame-66" onClick={editButton}>
                  <img
                    src={editLogo}
                    className="Post-edit-logo"
                    alt="Edit"
                  ></img>
                </button>
                <Modal
                  isOpen={deleteModalIsOpen}
                  onRequestClose={() => {
                    setModalInputPassword(false);
                    setDeleteModalIsOpen(false);
                    setPasswordIsWrong(false);
                  }}
                  className="Posts-modal"
                >
                  {modalInputPassword ? (
                    <>
                      <div className="Posts-modal-container">
                        <span className="Posts-modal-title">
                          게시글 비밀번호를 입력해주세요
                        </span>
                        <form
                          className="Posts-modal-form"
                          onSubmit={handleSubmit(onDeletePasswordSubmit)}
                        >
                          {passwordIsWrong ? (
                            <input
                              {...register("password", { required: true })}
                              name="password"
                              placeholder="비밀번호가 틀렸습니다"
                              className="Posts-modal-input-error"
                              type="password"
                            ></input>
                          ) : (
                            <input
                              {...register("password", { required: true })}
                              name="password"
                              placeholder="비밀번호를 입력해주세요"
                              className="Posts-modal-input"
                              type="password"
                            ></input>
                          )}
                          <button className="Posts-modal-button transition-colors">
                            삭제하기
                          </button>
                        </form>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="Posts-modal-container">
                        <span className="Posts-modal-title">
                          게시물을 삭제하겠습니까?
                        </span>
                        <div className="Posts-modal-form">
                          <button
                            onClick={() => {
                              setModalInputPassword(true);
                            }}
                            className="Post-modal-button-yes"
                          >
                            예
                          </button>
                          <button
                            onClick={() => {
                              setDeleteModalIsOpen(false);
                            }}
                            className="Post-modal-button-no"
                          >
                            아니오
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </Modal>
                <Modal isOpen={deleteIsDone} className="Posts-modal">
                  <div className="Posts-modal-container">
                    <span className="Posts-modal-title">
                      게시글이 삭제되었습니다
                    </span>
                    <div className="Posts-modal-form">
                      <button
                        onClick={onDeleteCompletedClick}
                        className="Post-modal-button-ok"
                      >
                        확인
                      </button>
                    </div>
                  </div>
                </Modal>
                <button className="Post-Frame-65" onClick={deleteButton}>
                  <img
                    src={deleteLogo}
                    className="Post-delete-logo"
                    alt="Delete"
                  ></img>
                </button>
                <button className="Post-Frame-64">
                  <Link to="/posts">
                    <img
                      src={postsLogo}
                      className="Post-posts-list-logo"
                      alt="Posts-list"
                    ></img>
                  </Link>
                </button>
              </div>
            </div>

            {commentsData?.findAllComments?.comments?.length !== 0 && (
              <div>
                <span className="Post-answer-title">문의 답변</span>
                <div className="Post-Line-2"></div>
                <div className="Post-answer-content">
                  {process.env.NODE_ENV === "production" // production일때랑 local 일때랑 데이터 배치가 달라서 이렇게 설정
                    ? data?.findPost.post?.comments[0]?.content
                    : data?.findPost.post?.comments[
                        data?.findPost.post?.comments.length - 1
                      ]?.content}
                </div>
                <div className="Post-Line-5"></div>
              </div>
            )}

            {userData?.me.role === "Manager" ? (
              <form onSubmit={handleSubmit(onCommentSubmit)}>
                <textarea
                  className="Post-comment-container"
                  {...register("comment")}
                  name="comment"
                ></textarea>
                <Button
                  canClick={formState.isValid}
                  loading={loading}
                  actionText={"답변 등록"}
                />
              </form>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};
