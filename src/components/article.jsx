import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Review from "./review";

const Article = () => {
  const { state } = useLocation();
  const [likeCount, setLikeCount] = useState(12);
  const [hateCount, setHateCount] = useState(1);

  const reviews = [
    { userId: "User1", userGrade: "대학교 1학년", review: "괜찮고 쓸만해요!" },
    { userId: "User2", userGrade: "대학교 3학년", review: "별로..." },
    {
      userId: "User3",
      userGrade: "대학교 2학년",
      review: "완전 새거이고 쓰는 데 딱히 큰 지장을 없었어요!",
    },
    { userId: "User4", userGrade: "대학교 4학년", review: "good~~~" },
  ];
  return (
    <div className="totalPage">
      <Navbar />
      <div className="Page">
        <div className="articleUserContainer">
          <div className="articleUserProfile">
            <div className="articleUserProfileImage"></div>
            <div className="articleUserProfileDetail">
              <div className="articleUserProfileDetailName">{state.name}</div>
              <div className="articleUserProfileDetailComment">
                {state.grade}
              </div>
            </div>
          </div>
          <div className="articleUserBtn">
            <div className="articleUserChatBtn">채팅하기</div>
            <div className="articleUserReportBtn">신고하기</div>
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
          제가 이번학기에 수업을 들고 있는데...
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
              />
            </div>
          </div>
          <div className="productSidebar"></div>
          <div className="productReviewContainer">
            {reviews.map((review) => {
              return (
                <Review
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
