import React from "react";
import Navbar from "../components/navbar";
import { FaListAlt } from "react-icons/fa";
import ArticleBoxAll from "../components/articleBoxAll";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const navigate = useNavigate();
  const Articles = [
    {
      index: "1",
      name: "Happy",
      grade: "대학교 3학년",
      title: "소분설 과제 좀 도와주세요",
      miniTitle: "제가 이번학기에 수업을 듣고 있는데...",
      src: "img/happy.png",
    },
    {
      index: "2",
      name: "메시",
      grade: "대학교 1학년",
      title: "좋은 자바 교재 추천받아요!!",
      miniTitle: "2학년 때 자바를 배운다고 들어서 예습 겸 볼려고 하는데요...",
      src: "img/messi.png",
    },
    {
      index: "3",
      name: "숭실대짱",
      grade: "대학교 2학년",
      title: "프로젝트 팀원 구합니다",
      miniTitle: "캡스톤종합디자인프로젝트1 팀원 구합니다...",
      src: "img/soongsil.png",
    },
    {
      index: "4",
      name: "구구",
      grade: "대학교 3학년",
      title: "소분설 과제 좀 도와주세요",
      miniTitle: "제가 이번학기에 수업을 듣고 있는데...",
      src: "img/gugu.png",
    },
    {
      index: "5",
      name: "슈렉",
      grade: "대학교 1학년",
      title: "좋은 자바 교재 추천받아요!!",
      miniTitle: "2학년 때 자바를 배운다고 들어서 예습 겸 볼려고 하는데요...",
      src: "img/surek.png",
    },
    {
      index: "6",
      name: "당근",
      grade: "대학교 2학년",
      title: "프로젝트 팀원 구합니다",
      miniTitle: "캡스톤종합디자인프로젝트1 팀원 구합니다...",
      src: "img/carrot.png",
    },
    {
      index: "7",
      name: "토미",
      grade: "대학교 4학년",
      title: "계절학기",
      miniTitle: "계절학기 언제부터 시작인가요...?",
      src: "img/reactImg.png",
    },
  ];
  return (
    <div className="TotalPage">
      <div className="boardPostBtn" onClick={() => navigate("/board/enroll")}>
        +
      </div>
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
          {Articles.slice(0)
            .reverse()
            .map((article) => {
              return (
                <ArticleBoxAll
                  src={article.src}
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
