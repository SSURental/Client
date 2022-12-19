import React, { useState } from "react";
import Navbar from "../components/navbar";
import RentModalStudent from "../components/rentModalStudent";
import ReportModal from "../components/reportModal";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRent, setIsRent] = useState(false);
  return (
    <div className="TotalPage">
      {isOpen && (
        <ReportModal isOpen={isOpen} moveArticle={() => setIsOpen(false)} />
      )}
      {isRent && (
        <RentModalStudent isRent={isRent} moveRent={() => setIsRent(false)} />
      )}
      <Navbar />
      <div className="Page">
        <div className="chatUserContainer">
          <div className="chatUser">
            <div className="chatUserImg">
              <img src="img/spongebob.png" className="chatUserImg"></img>
            </div>
            <div className="chatUserText">
              <div className="chatUserName">스폰지밥</div>
              <div className="chatUserDetail">대학교 2학년</div>
            </div>
          </div>
          <div className="chatBtn">
            <div className="chatList" onClick={() => setIsRent(true)}>
              대여확정
            </div>
            <div className="chatUserReport" onClick={() => setIsOpen(true)}>
              신고하기
            </div>
          </div>
        </div>
        <div className="chatSlider"></div>
        <div className="chatUI">
          <div className="chatInputContainer">
            <div className="chatInput">
              <input type="text" name="text" className="chatInputText"></input>
            </div>
            <div className="chatSubmit">전송</div>
          </div>
          <div className="chatTextContainer">
            <div className="chatTextUserContainer">
              <div className="chatTextUser">안녕하세요!</div>
              <div className="chatTextUserTime">13:12</div>
            </div>
            <div className="chatTextUserContainer">
              <div className="chatTextUser">혹시 장소 어디가 좋으세요...?</div>
              <div className="chatTextUserTime">13:12</div>
            </div>
            <div className="chatTextNotUserContainer">
              <div className="chatTextNotUser">넵! 안녕하세요!</div>
              <div className="chatTextNotUserTime">13:12</div>
            </div>
            <div className="chatTextNotUserContainer">
              <div className="chatTextNotUser">음...정보관 앞 어떠세요?</div>
              <div className="chatTextNotUserTime">13:13</div>
            </div>
            <div className="chatTextUserContainer">
              <div className="chatTextUser">
                좋아요! 정보관 앞 12시에 볼게요!
              </div>
              <div className="chatTextUserTime">13:13</div>
            </div>
            <div className="chatTextNotUserContainer">
              <div className="chatTextNotUser">넵넵!</div>
              <div className="chatTextNotUserTime">13:13</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
