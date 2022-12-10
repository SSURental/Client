import React from "react";
import { useNavigate } from "react-router-dom";

const ArticleBoxAll = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="articleBoxContainer">
        <div
          className="articleBox"
          onClick={() => {
            navigate("/board/article", { state: props });
          }}
        >
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
