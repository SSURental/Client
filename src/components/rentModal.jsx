import React from "react";
import { useNavigate } from "react-router-dom";

const RentModal = ({ moveLogin }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    moveLogin?.();
    navigate("/myPage");
  };

  return (
    <div className="modalOverlay">
      <div className="modalWrap">
        <div className="modalContents">
          <div className="modalContentsLogo">
            <span className="modalContentsLogoLeft">SSU</span>
            <span className="modalContentsLogoRight">RENTAL</span>
          </div>
          <div className="modalContentsTitle">대여가 완료되었습니다!</div>
          <div className="modalContentsTexts">
            마이 페이지에서 나의 대여 물품을 확인하세요!
          </div>
          <div className="modalButton" onClick={handleClose}>
            마이 페이지 가기
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentModal;
