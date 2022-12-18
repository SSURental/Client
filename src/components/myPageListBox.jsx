import React from "react";

const MyPageListBox = (props) => {
  return (
    <>
      <div className="mypageListBoxContainer">
        <div className="mypageListBox">
          <img src={props.src} className="mypageListBox"></img>
        </div>
        <div className="mypageListBoxContext">
          <div className="mypageListBoxTitleContainer">
            <div className="mypageListBoxTitle">{props.title}</div>
            <div className="mypageListBoxDueDate">{props.date}</div>
          </div>
          <div className="mypageListBoxBtn">반납</div>
        </div>
      </div>
    </>
  );
};

export default MyPageListBox;
