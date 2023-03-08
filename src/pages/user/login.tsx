import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { authTokenVar, isLoggedInVar } from "../../apollo";
import { LOCALSTORAGE_TOKEN } from "../../constants";
import { login, loginVariables } from "../../__generated__/login";
import { Button } from "../../components/button";
import { FormError } from "../../components/formError";
import { Link, useNavigate } from "react-router-dom";

const LOGIN_MUTATION = gql`
  mutation login($loginInput: LoginInput!) {
    login(input: $loginInput) {
      ok
      error
      token
    }
  }
`;

interface ILoginForm {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const { register, formState, getValues, handleSubmit } = useForm<ILoginForm>({
    mode: "onChange",
  });

  const onSubmit = () => {
    if (!loading) {
      const { email, password } = getValues();
      loginMutation({
        variables: {
          loginInput: {
            email,
            password,
          },
        },
      });
    }
  };

  const onCompleted = (data: login) => {
    const {
      login: { ok, token },
    } = data;
    if (ok && token) {
      localStorage.setItem(LOCALSTORAGE_TOKEN, token);
      authTokenVar(token);
      isLoggedInVar(true);
      navigate("/", { replace: true });
    }
  };

  // useMutation React Query를 이용해 서버에 데이터 변경 작업을 요청할 때 사용
  // 데이터베이스로 비유하자면 insert, update, delete가 모두 포함

  const [loginMutation, { data: loginData, loading }] = useMutation<
    login,
    loginVariables
  >(LOGIN_MUTATION, {
    onCompleted,
  });

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", { required: true })}
            name="email"
            type="email"
            placeholder="아이디"
          />
          <input
            {...register("password", { required: true })}
            name="password"
            type="password"
            placeholder="비밀번호"
          />
          <Button
            canClick={formState.isValid}
            loading={loading}
            actionText={"로그인"}
          />
          {loginData?.login.error && (
            <FormError
              errorMessage={` 아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. \n 입력하신 내용을 다시 확인해주세요.`}
            />
          )}
        </form>
      </div>
      <div>
        <Link to="/createuser" className=" text-blue-700 hover:underline">
          회원가입
        </Link>
      </div>
    </div>
  );
};
