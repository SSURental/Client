import React from "react";
import { useNavigate } from "react-router-dom";

const RentModalStudent = ({ moveRent }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    moveRent?.();
    navigate("/myPage");
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
            <div className="modalContentsTitle">날짜를 입력해주세요.</div>
            <div className="modalContentsDateText">대여일시</div>
            <div className="modalContentsDate">
              <input type="date" id="modalContentsDate"></input>
            </div>
            <div className="modalContentsDateText">반납일시</div>
            <div className="modalContentsDate">
              <input type="date" id="modalContentsDate"></input>
            </div>
            <div className="modalButton" onClick={handleClose}>
              대여확정
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentModalStudent;
