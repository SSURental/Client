import React from "react";

const Review = (props) => {
  return (
    <div className="reviewContainer">
      <div className="reviewUserProfile">
        <div className="reviewUserProfileImage">
          <img src={props.src} className="reviewUserProfileImg"></img>
        </div>
        <div className="reviewUserProfileDetail">
          <div className="reviewUserProfileDetailName">{props.userId}</div>
          <div className="reviewUserProfileDetailGrade">{props.userGrade}</div>
        </div>
      </div>
      <div className="reviewSidebar"></div>
      <div className="review">{props.review}</div>
    </div>
  );
};

export default Review;
