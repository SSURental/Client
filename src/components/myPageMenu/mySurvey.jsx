import React from "react";
import axios from "axios";
import { useState } from "react";
import MyPageListBox from "../myPageListBox";

const MySurvey = () => {
  const token = localStorage.getItem("token");

  const mySurveyBox = [
    {
      surveyIdx: "1",
      surveyTitle: "c프로그래밍교재",
      surveyPointValue: "2000원",
      surveyTime: "2개월",
      preferAge: "10대",
      preferGender: "남자",
      hashtag: "몰라",
      deadlineAt: "2022/09/14",
      totalParticipant: "20",
      src: "img/coding.png",
      date: "2022/12/20",
    },
  ];

  return (
    <div className="myPageSurvey">
      {mySurveyBox.map((survey) => {
        return (
          <MyPageListBox
            date={survey.date}
            src={survey.src}
            key={survey.surveyIdx}
            title={survey.surveyTitle}
            point={survey.surveyPointValue}
            time={survey.surveyTime}
            age={survey.preferAge}
            gender={survey.preferGender}
            hashtag={survey.hashtag}
            participant={survey.totalParticipant}
          />
        );
      })}
    </div>
  );
};

export default MySurvey;
