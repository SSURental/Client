import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Title from "../components/title";

const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleIdChange = (e) => {
    setLoginId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitLogin = async () => {
    const body = {
      loginId,
      password,
    };

    const loginApi = await axios.get(`http://localhost:3000/login`, body);

    if (loginApi.data.code === 2000) {
      localStorage.setItem("token", loginApi.data.result);
      navigate("/");
    } else {
      setErrorMessage("로그인 불가");
    }
  };

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
            onChange={handleIdChange}
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
            onChange={handlePasswordChange}
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
          onClick={handleSubmitLogin}
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
