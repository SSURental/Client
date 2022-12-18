import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Review from "./review";

const Product = () => {
  const { state } = useLocation();

  const productImgSrc = "../" + state.src;

  const [likeCount, setLikeCount] = useState(7);
  const [reviews, setReviews] = useState([
    {
      userId: "잠만보",
      userGrade: "대학교 1학년",
      review: "괜찮고 쓸만해요!",
      src: "../img/잠만보.png",
    },
    {
      userId: "아인슈타인",
      userGrade: "대학교 3학년",
      review: "별로...",
      src: "../img/아인슈타인.png",
    },
    {
      userId: "월래스",
      userGrade: "대학교 2학년",
      review: "완전 새거이고 쓰는 데 딱히 큰 지장을 없었어요!",
      src: "../img/월래스.png",
    },
    {
      userId: "루피",
      userGrade: "대학교 4학년",
      review: "good~~~",
      src: "../img/루피.png",
    },
  ]);

  const [review, setReview] = useState("");

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleReviewSubmit = () => {
    const body = {
      userId: "토미",
      userGrade: "대학교 4학년",
      review,
      src: "../img/reactImg.png",
    };
    setReviews((reviews) => reviews.concat(body));
    setReview(" ");
  };

  return (
    <div className="totalPage">
      <Navbar />
      <div className="Page">
        <div className="productContainer">
          <div className="productImage">
            <img src={productImgSrc} className="productImg"></img>
          </div>
          <div className="productDetail">
            <div className="productUserContainer">
              <div className="productUserProfile">
                <div className="productUserProfileImage">
                  <img
                    src="../img/spongebob.png"
                    className="productUserProfileImg"
                  ></img>
                </div>
                <div className="productUserProfileDetail">
                  <div className="productUserProfileDetailName">스폰지밥</div>
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
              <div
                className="productLikeBtn"
                onClick={() => setLikeCount(likeCount + 1)}
              >
                좋아요
                <span className="productLikeNum">{likeCount}</span>
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
              onChange={handleReviewChange}
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
                onClick={handleReviewSubmit}
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

export default Product;
