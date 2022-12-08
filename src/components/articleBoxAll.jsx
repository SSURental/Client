import React from "react";

const ArticleBoxAll = (props) => {
  return (
    <>
      <div className="articleBoxContainer">
        <div className="articleBox">
          <div className="articleBoxProfileImage"></div>
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

export default ArticleBoxAll;
