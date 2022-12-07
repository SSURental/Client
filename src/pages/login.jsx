import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/title";

const Login = () => {
  return (
    <>
      <Link to="/">
        <Title />
      </Link>
      <div className="loginTitle">로그인</div>
      <div className="loginIdInputContainer">
        <div className="loginIdInputTitle">아이디</div>
        <div className="loginIdInput">
          <input
            id="loginInputId"
            type="text"
            name="name"
            placeholder="아이디를 입력하세요."
          ></input>
        </div>
      </div>
      <div className="loginPasswordInputContainer">
        <div className="loginPasswordInputTitle">비밀번호</div>
        <div className="loginPasswordInput">
          <input
            id="loginInputPassword"
            type="text"
            name="name"
            placeholder="비밀번호를 입력하세요."
          ></input>
        </div>
      </div>
      <div className="loginSubmitBtn">
        <input
          id="loginSubmitBtn"
          className="loginSubmit"
          type="submit"
          name="submit"
          value="로그인하기"
        />
      </div>
      <div className="loginAskMember">아직 SSURENTAL 회원이 아니신가요?</div>
      <Link
        to="/signUp"
        style={{
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        <div className="loginSignUpBtn">회원가입 하기</div>
      </Link>
    </>
  );
};

export default Login;
