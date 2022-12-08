import React from "react";
import Navbar from "../components/navbar";
import { FaListAlt } from "react-icons/fa";
import ArticleBoxAll from "../components/articleBoxAll";

const Board = () => {
  const Articles = [
    {
      index: "1",
      name: "User1",
      grade: "대학교 3학년",
      title: "소분설 과제 좀 도와주세요",
      miniTitle: "제가 이번학기에 수업을 듣고 있는데...",
    },
    {
      index: "2",
      name: "User2",
      grade: "대학교 1학년",
      title: "좋은 자바 교재 추천받아요!!",
      miniTitle: "2학년 때 자바를 배운다고 들어서 예습 겸 볼려고 하는데요...",
    },
    {
      index: "3",
      name: "User3",
      grade: "대학교 2학년",
      title: "프로젝트 팀원 구합니다",
      miniTitle: "캡스톤종합디자인프로젝트1 팀원 구합니다...",
    },
    {
      index: "4",
      name: "User1",
      grade: "대학교 3학년",
      title: "소분설 과제 좀 도와주세요",
      miniTitle: "제가 이번학기에 수업을 듣고 있는데...",
    },
    {
      index: "5",
      name: "User2",
      grade: "대학교 1학년",
      title: "좋은 자바 교재 추천받아요!!",
      miniTitle: "2학년 때 자바를 배운다고 들어서 예습 겸 볼려고 하는데요...",
    },
    {
      index: "6",
      name: "User3",
      grade: "대학교 2학년",
      title: "프로젝트 팀원 구합니다",
      miniTitle: "캡스톤종합디자인프로젝트1 팀원 구합니다...",
    },
  ];
  return (
    <div className="TotalPage">
      <div className="boardPostBtn">+</div>
      <Navbar />
      <div className="Page">
        <div className="boardTitleContainer">
          <span className="boardTitle">게시판</span>
          <span className="boardTitleNextSentence">
            학교생활 관련되서 궁금하거나 하고 싶은 얘기 여기서 나눠요!
          </span>
        </div>
        <div className="boardContainer">
          <span className="boardProductIcon">
            <FaListAlt color="#E1605C" size="30px" />
          </span>
          <span className="boardProductTitle">게시판 목록</span>
        </div>
        <div className="boardArticleContainer">
          {Articles.map((article) => {
            return (
              <ArticleBoxAll
                name={article.name}
                grade={article.grade}
                title={article.title}
                miniTitle={article.miniTitle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Board;
