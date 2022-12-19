import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
import ReportModal from "./reportModal";
import Review from "./review";

const Article = () => {
  const { state } = useLocation();
  const [likeCount, setLikeCount] = useState(12);
  const [hateCount, setHateCount] = useState(1);
  const [review, setReview] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleReviewBtn = () => {
    const body = {
      userId: "토미",
      userGrade: "대학교 4학년",
      review,
      src: "../img/reactImg.png",
    };
    setReviews((reviews) => reviews.concat(body));
    setReview(" ");
  };

  const [reviews, setReviews] = useState([
    {
      userId: "자바",
      userGrade: "대학교 3학년",
      review: "혹시 같이 하실래요...?",
      src: "../img/javalogo.png",
    },
    {
      userId: "리눅스",
      userGrade: "대학교 3학년",
      review: "제가 도와드릴게요!!",
      src: "../img/리눅스.png",
    },
  ]);

  const handleReportBtn = () => {
    setIsOpen(true);
  };

  return (
    <div className="totalPage">
      {isOpen && (
        <ReportModal isOpen={isOpen} moveArticle={() => setIsOpen(false)} />
      )}
      <Navbar />
      <div className="Page">
        <div className="articleUserContainer">
          <div className="articleUserProfile">
            <div className="articleUserProfileImage">
              <img
                src="../img/gugu.png"
                className="articleUserProfileImage"
              ></img>
            </div>
            <div className="articleUserProfileDetail">
              <div className="articleUserProfileDetailName">{state.name}</div>
              <div className="articleUserProfileDetailComment">
                {state.grade}
              </div>
            </div>
          </div>
          <div className="articleUserBtn">
            <div className="articleUserChatBtn">채팅하기</div>
            <div className="articleUserReportBtn" onClick={handleReportBtn}>
              신고하기
            </div>
          </div>
        </div>
        <div className="articleSidebar"></div>
        <div className="articleContentTitleContainer">
          <div className="articleContentTitle">{state.title}</div>
          <div className="articleContentTitleBtn">
            <div
              className="articleContentTitleLikeBtn"
              onClick={() => setLikeCount(likeCount + 1)}
            >
              좋아요<span className="articleNum">{likeCount}</span>
            </div>
            <div
              className="articleContentTitleHateBtn"
              onClick={() => setHateCount(hateCount + 1)}
            >
              싫어요<span className="articleNum">{hateCount}</span>
            </div>
          </div>
        </div>
        <div className="articleContent">
          제가 이번학기에 수업을 들고 있는데 수업을 들어도 무슨 말 인지
          모르겠네요 ㅠㅠ 혹시 과제 좀 도와주실 분 없나요..?
        </div>
        <div className="articleSidebar"></div>
        {/* product 리뷰 하고 형식이 같아 일단 따옴 */}
        <div className="productReviewContainer">
          <span className="productReviewTitle">댓글</span>
          <span className="productReviewNum">25</span>
          <div className="productReviewInput">
            <input
              id="productReviewInput"
              type="text"
              name="name"
              placeholder="댓글을 입력하세요."
              onChange={(e) => {
                setReview(e.target.value);
              }}
            ></input>
          </div>
          <div className="productReviewBtnContainer">
            <div className="productReviewBtn">
              <input
                id="productReviewBtn"
                className="reviewSubmit"
                type="submit"
                name="submit"
                value="등록하기"
                onClick={handleReviewBtn}
              />
            </div>
          </div>
          <div className="productSidebar"></div>
          <div className="productReviewContainer">
            {reviews
              .slice(0)
              .reverse()
              .map((review) => {
                return (
                  <Review
                    src={review.src}
                    userId={review.userId}
                    userGrade={review.userGrade}
                    review={review.review}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
