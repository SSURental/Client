import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/modal";
import Title from "../components/title";

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [loginId, setLoginId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const memberGroup = "SCHOOL";
  const imageDTO = {
    imgName: "xxawqez-234124",
  };

  const handleIdChange = (e) => {
    setLoginId(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitSignUp = async () => {
    const body = {
      loginId,
      password,
      name,
      memberGroup,
      imageDTO,
    };

    const signUpApi = await axios.post(
      `http://52.78.109.162:8080/members`,
      body
    );

    console.log(signUpApi);

    if (signUpApi.status === 201) {
      localStorage.setItem("memberId", signUpApi.data);
      setIsOpen(true);
    }
  };

  return (
    <>
      {isOpen && <Modal isOpen={isOpen} moveLogin={() => setIsOpen(false)} />}
      <Link to="/">
        <Title />
      </Link>
      <div className="signUpTitle">회원가입</div>
      <div className="signUpNameInputContainer">
        <div className="signUpNameInputTitle">이름</div>
        <div className="signUpNameInput">
          <input
            id="signUpInputName"
            type="text"
            name="name"
            placeholder="실명을 입력하세요."
            onChange={handleNameChange}
          ></input>
        </div>
      </div>
      <div className="signUpIdInputContainer">
        <div className="signUpIdInputTitle">아이디</div>
        <div className="signUpIdInput">
          <input
            id="signUpInputId"
            type="text"
            name="name"
            placeholder="아이디를 입력하세요."
            onChange={handleIdChange}
          ></input>
        </div>
      </div>
      <div className="signUpPasswordInputContainer">
        <div className="signUpPasswordInputTitle">비밀번호</div>
        <div className="signUpPasswordInput">
          <input
            id="signUpInputPassword"
            type="password"
            name="password"
            placeholder="6~16자의 영문자, 숫자, 특수문자를 사용하세요."
            onChange={handlePasswordChange}
          ></input>
        </div>
      </div>
      <div className="signUpPasswordInputContainer">
        <div className="signUpPasswordInputTitle">비밀번호 확인</div>
        <div className="signUpPasswordInput">
          <input
            id="signUpInputPassword"
            type="password"
            name="password"
            placeholder="비밀번호를 한번 더 입력하세요."
          ></input>
        </div>
      </div>
      <div className="signUpSubmitBtn">
        <input
          id="signUpSubmitBtn"
          className="signupSubmit"
          type="submit"
          name="submit"
          value="회원가입 하기"
          onClick={handleSubmitSignUp}
        />
      </div>
    </>
  );
};

export default SignUp;
