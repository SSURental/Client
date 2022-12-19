import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

const ArticleEnroll = () => {
  const navigate = useNavigate();
  return (
    <div className="totalPage">
      <Navbar />
      <div className="Page">
        <div className="articleEnrollTitle">게시물 등록</div>
        <div className="articleEnrollMiniTitle">기본 정보</div>
        <div className="articleEnrollSidebar"></div>
        <div className="articleEnrollNameContainer">
          <div className="articleEnrollNameTitle">제목</div>
          <div className="articleEnrollNameInput">
            <input id="articleEnrollNameInput" type="text"></input>
          </div>
        </div>
        <div className="articleEnrollSidebar"></div>
        <div className="articleEnrollDetailContainer">
          <div className="articleEnrollDetailTitle">내용</div>
          <div className="articleEnrollDetailInput">
            <textarea id="articleEnrollDetailInput"></textarea>
          </div>
        </div>
        <div className="articleEnrollSidebar"></div>
        <div className="articleEnrollBtnContainer">
          <div className="articleEnrollBtn">
            <input
              id="articleEnrollBtn"
              type="submit"
              value="등록하기"
              onClick={() => navigate("/board")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleEnroll;
