import React from "react";
import Navbar from "../components/navbar";
import { FaCrown } from "react-icons/fa";
import ProductBox from "../components/productBox";
import ArticleBox from "../components/articleBox";

const Main = () => {
  const popularProducts = [
    { rank: "1", title: "우산", price: "1000원", src: "img/umbrella.png" },
    { rank: "2", title: "천막 세트", price: "20000원", src: "img/tent.png" },
    {
      rank: "3",
      title: "공학용 계산기",
      price: "1500원",
      src: "img/calculator.png",
    },
    {
      rank: "4",
      title: "C프로그래밍 교재",
      price: "2000원",
      src: "img/coding.png",
    },
  ];

  const popularArticles = [
    {
      rank: "1",
      name: "징징이",
      grade: "대학교 3학년",
      title: "소분설 과제 좀 도와주세요",
      miniTitle: "제가 이번학기에 수업을 듣고 있는데...",
      src: "img/squard.png",
    },
    {
      rank: "2",
      name: "뚱이",
      grade: "대학교 1학년",
      title: "좋은 자바 교재 추천받아요!!",
      miniTitle: "2학년 때 자바를 배운다고 들어서 예습 겸 볼려고 하는데요...",
      src: "img/star.png",
    },
    {
      rank: "3",
      name: "스폰지밥",
      grade: "대학교 2학년",
      title: "프로젝트 팀원 구합니다",
      miniTitle: "캡스톤종합디자인프로젝트1 팀원 구합니다...",
      src: "img/spongebob.png",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="Page">
        <div className="rank">
          <div className="rankContainer">
            <span className="rankIcon">
              <FaCrown color="#E1605C" size="30px" />
            </span>
            <span className="rankTitle">대여물품 랭킹</span>
            <span className="rankSubTitle">대여자 순 · 매일 자정 초기화</span>
          </div>
          <div className="rankBoxContainer">
            {popularProducts.map((product) => {
              return (
                <ProductBox
                  src={product.src}
                  rank={product.rank}
                  title={product.title}
                  price={product.price}
                />
              );
            })}
          </div>
        </div>
        <div className="rankSecond">
          <div className="rankContainer">
            <span className="rankIcon">
              <FaCrown color="#E1605C" size="30px" />
            </span>
            <span className="rankTitle">게시판 랭킹</span>
            <span className="rankSubTitle">조회자 순 · 매일 자정 초기화</span>
          </div>
          <div className="rankBoxContainerBoard">
            {popularArticles.map((article) => {
              return (
                <ArticleBox
                  src={article.src}
                  rank={article.rank}
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
    </>
  );
};

export default Main;
