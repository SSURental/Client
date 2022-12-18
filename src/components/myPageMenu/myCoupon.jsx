import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const MyCoupon = () => {
  return (
    <div>
      <div className="writeList">
        <div className="writeTitle">게시글</div>
        <div className="writeContentsContainer">
          <div className="writeContents">
            <div className="writeContentsTitle">
              자바프로그래밍 족보 구합니다!
            </div>
            <div className="writeContentsDetail">
              중간고사, 기말고사 족보 구해요!
            </div>
          </div>
          <div className="writeDelete">
            <FaTrashAlt color="#e1605c" size="40px" />
          </div>
        </div>
      </div>
      <div className="writeList">
        <div className="writeTitle">댓글</div>
        <div className="writeContentsContainer">
          <div className="writeContents">
            <div className="writeContentsTitle">
              캡스톤종합디자인프로젝트1 팀원 구합니다!
            </div>
            <div className="writeContentsDetail">혹시 저 가능할까요...?</div>
          </div>
          <div className="writeDelete">
            <FaTrashAlt color="#e1605c" size="40px" />
          </div>
        </div>
      </div>
      <div className="writeList">
        <div className="writeTitle">리뷰</div>
        <div className="writeContentsContainer">
          <div className="writeContents">
            <div className="writeContentsTitle">천막</div>
            <div className="writeContentsDetail">좀 많이 낡았어요...</div>
          </div>
          <div className="writeDelete">
            <FaTrashAlt color="#e1605c" size="40px" />
          </div>
        </div>
        <div className="writeContentsContainer">
          <div className="writeContents">
            <div className="writeContentsTitle">줄 이어폰</div>
            <div className="writeContentsDetail">음질 좋고 나쁘지 않아요</div>
          </div>
          <div className="writeDelete">
            <FaTrashAlt color="#e1605c" size="40px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCoupon;
