import { gql, useMutation, useReactiveVar } from "@apollo/client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { useMe } from "../hooks/useMe";
import { createPost, createPostVariables } from "../__generated__/createPost";

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
  password: string;
  ownerName: string;
  institution: string;
  phoneNumber: string;
  email: string;
}

export const CreatePost = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  if (isLoggedIn) {
  }
  const { data: userData, refetch } = useMe();
  console.log(userData?.me.email);
  const navigate = useNavigate();
  const { register, formState, getValues, handleSubmit } =
    useForm<ICreatePostForm>({
      mode: "onChange",
      defaultValues: {
        ownerName: userData?.me.name,
        institution: userData?.me.institution,
        phoneNumber: userData?.me.phoneNumber,
        email: userData?.me.email,
      },
    });
  const [createPostMutation, { data: creataPostData, loading }] = useMutation<
    createPost,
    createPostVariables
  >(CREATE_POST_MUTATION);
  const onSubmit = () => {
    const { ownerName, institution, phoneNumber, email, title, content } =
      getValues();
  };

  const onCompleted = (data: createPost) => {
    const {
      createPost: { ok },
    } = data;
    if (ok) {
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("ownerName", { required: true })}
          name="ownerName"
          placeholder="ownerName"
        />
        <input {...register("institution")} name="institution" />
        <input
          {...register("phoneNumber", { required: true })}
          name="phoneNumber"
          placeholder="phoneNumber"
        />
        <input
          {...register("email", { required: true })}
          name="email"
          placeholder="email"
        />
        <input
          {...register("password")}
          name="password"
          placeholder="password"
        />
        <input
          {...register("title", { required: true })}
          name="title"
          placeholder="title"
        />
        <input
          {...register("content", { required: true })}
          name="content"
          placeholder="content"
        />
      </form>
    </div>
  );
};
