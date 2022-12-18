import React from "react";

const MyPageListBox2 = (props) => {
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
        </div>
      </div>
    </>
  );
};

export default MyPageListBox2;
