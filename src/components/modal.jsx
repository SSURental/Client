import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ moveLogin }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    moveLogin?.();
    navigate("/login");
  };

  return (
    <div className="modalOverlay">
      <div className="modalWrap">
        <div className="modalContents">
          <div className="modalContentsLogo">
            <span className="modalContentsLogoLeft">SSU</span>
            <span className="modalContentsLogoRight">RENTAL</span>
          </div>
          <div className="modalContentsTitle">회원가입이 완료되었습니다!</div>
          <div className="modalButton" onClick={handleClose}>
            로그인 하기
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
