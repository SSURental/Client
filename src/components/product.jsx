import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Review from "./review";

const Product = () => {
  const { state } = useLocation();

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
        <div className="productContainer">
          <div className="productImage"></div>
          <div className="productDetail">
            <div className="productUserContainer">
              <div className="productUserProfile">
                <div className="productUserProfileImage"></div>
                <div className="productUserProfileDetail">
                  <div className="productUserProfileDetailName">User1</div>
                  <div className="productUserProfileDetailComment">
                    대학교 1학년
                  </div>
                </div>
              </div>
              <div className="productUserChatBtn">채팅하기</div>
            </div>
            <div className="productSidebar"></div>
            <div className="productTitle">{state.title}</div>
            <div className="productPrice">{state.price}</div>
            <div className="productComment">
              완전 새거이고 쓰는 데 딱히 큰 지장을 없을 거에요!!
            </div>
            <div className="productBtn">
              <div className="productLikeBtn">
                좋아요<span className="productLikeNum">7</span>
              </div>
              <div className="productPurchaseBtn">대여하기</div>
            </div>
          </div>
        </div>
        <div className="productSidebar"></div>
        <div className="productReviewContainer">
          <span className="productReviewTitle">리뷰</span>
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

export default Product;
