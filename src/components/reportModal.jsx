import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReportModal = ({ moveArticle }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    moveArticle?.();
    navigate("/board");
  };

  return (
    <>
      <div className="modalOverlay">
        <div className="modalWrap">
          <div className="modalContents">
            <div className="modalContentsLogo">
              <span className="modalContentsLogoLeft">SSU</span>
              <span className="modalContentsLogoRight">RENTAL</span>
            </div>
            <div className="modalContentsTitle">
              신고할 내용을 입력해주세요.
            </div>
            <div className="modalContentsText">
              <textarea className="modalContentsText"></textarea>
            </div>
            <div className="modalButton" onClick={handleClose}>
              신고하기
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportModal;
