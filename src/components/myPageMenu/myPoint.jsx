import React from "react";
import MyPageListBox2 from "../myPageListBox2";

const MyPoint = () => {
  const mySurveyBox = [
    {
      surveyIdx: "1",
      surveyTitle: "공책",
      surveyPointValue: "2000원",
      surveyTime: "2개월",
      preferAge: "10대",
      preferGender: "남자",
      hashtag: "몰라",
      deadlineAt: "2022/09/14",
      totalParticipant: "20",
      src: "img/note.png",
      date: "2023/01/12",
    },
  ];
  return (
    <div className="myPageSurvey">
      {mySurveyBox.map((survey) => {
        return (
          <MyPageListBox2
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

export default MyPoint;
