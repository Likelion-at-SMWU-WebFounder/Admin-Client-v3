import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../api/cookie";
import * as S from "./style/LoginPage.style";

const LoginPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    accountId: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const postAdmin = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST}/api/admin/signin`,
        {
          accountId: values.accountId,
          password: values.password,
        }
      );

      setCookie("accessToken", response.data.result.accessToken, {
        path: "/",
      });

      setCookie("refreshToken", response.data.result.refreshToken, {
        path: "/",
      });

      navigate("/");
    } catch (err) {
      console.error(err);
      alert("아이디와 비밀번호를 확인해주세요.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postAdmin();
  };

  return (
    <S.LoginLayout>
      <img
        src={`${process.env.PUBLIC_URL}/Logo.svg`}
        alt="Logo"
        className="logo"
      />
      <S.Form onSubmit={handleSubmit}>
        <S.InputWrapper>
          <S.Div>아이디</S.Div>
          <S.StyledInput
            type="id"
            id="accountId"
            name="accountId"
            value={values.accountId}
            onChange={handleChange}
          ></S.StyledInput>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Div>비밀번호</S.Div>
          <S.StyledInput
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            autoComplete="off"
          ></S.StyledInput>
        </S.InputWrapper>
        <S.LoginButton type="submit">로그인</S.LoginButton>
      </S.Form>
    </S.LoginLayout>
  );
};

export default LoginPage;
