import React from "react";

const ArticleBox = (props) => {
  return (
    <>
      <div className="articleBoxContainer">
        <div className="articleBox">
          <div className="articleBoxNumber">{props.rank}</div>
          <div className="articleBoxProfileImage">
            <img src={props.src} className="articleBoxProfileImg"></img>
          </div>
          <div className="articleBoxProfile">
            <div className="articleBoxProfileName">{props.name}</div>
            <div className="articleBoxProfileGrade">{props.grade}</div>
          </div>
          <div className="articleBoxContent">
            <div className="articleBoxContentTitle">{props.title}</div>
            <div className="articleBoxContentMiniTitle">{props.miniTitle}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleBox;
