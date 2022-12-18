import React from "react";

const MyProfileView = ({ handleMyProfile, aboutUser }) => {
  return (
    <div className="myPageProfile">
      <div className="myPageRightImgBox">
        <img
          className="myPageRightImg"
          src="img/reactImg.png"
          alt="사용자 기본 프로필 이미지"
        ></img>
      </div>
      <div className="myPageRightProfile">
        <div>
          <div className="myPageProfileTitle">닉네임</div>
          <div className="myPageProfileDetail">Tommy</div>
          {/* <div className="myPageProfileDetail">{aboutUser.userName}</div> */}
        </div>
        <div>
          <div className="myPageProfileTitle">이름</div>
          <div className="myPageProfileDetail">최준원</div>
        </div>
        <div className="myPageProfileIDEmailPW">
          <div>
            <div className="myPageProfileTitle">아이디</div>
            <div className="myPageProfileDetail">{aboutUser.userId}</div>
          </div>
          <div>
            <div className="myPageProfileTitle">이메일</div>
            <div className="myPageProfileDetail">junwon20170339@gmail.com</div>
          </div>
          {/* <div>
            <div className="myPageProfileTitle">비밀번호</div>
            <div className="myPageProfileDetail">{aboutUser.userGender}</div>
          </div> */}
        </div>
      </div>
      <button className="myPageRightChangeBnt" onClick={handleMyProfile}>
        사용자 정보 변경
      </button>
    </div>
  );
};

export default MyProfileView;
