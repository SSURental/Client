import React, { useState } from "react";
import Navbar from "../components/navbar";
import RentModal from "../components/rentModal";

const ProductRent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleProductRentBtn = () => {
    setIsOpen(true);
  };
  return (
    <div className="TotalPage">
      {isOpen && (
        <RentModal isOpen={isOpen} moveLogin={() => setIsOpen(false)} />
      )}
      <Navbar />
      <div className="Page">
        <div className="productEnrollTitle">대여하기</div>
        <div className="productEnrollSidebar"></div>
        <div className="productEnrollImageContatiner">
          <div className="productEnrollImageTitle">물품 정보</div>
          <div className="productEnrollImageInput">
            <img
              src="../../img/umbrella.png"
              className="productEnrollImgInput"
            ></img>
          </div>
          <div className="productEnrollInformation">
            <div className="productEnrollInformationTitle">우산</div>
            <div className="productEnrollInformationText">
              비오거나 눈이 올 경우 대여해서 사용하세요!
            </div>
          </div>
        </div>
        <div className="productEnrollSidebar"></div>
        <div className="productEnrollNameContainer">
          <div className="productEnrollNameTitle">대여일시</div>
          <div className="productEnrollNameInput">
            <input id="productEnrollNameInput" type="date"></input>
          </div>
        </div>
        <div className="productEnrollSidebar"></div>
        <div className="productEnrollPriceContainer">
          <div className="productEnrollPriceTitle">반납일시</div>
          <div className="productEnrollNameInput">
            <input id="productEnrollNameInput" type="date"></input>
          </div>
        </div>
        <div className="productEnrollSidebar"></div>
        <div className="productEnrollDetailContainer">
          <div className="productEnrollDetailTitle">주의사항</div>
          <div className="productEnrollDetailInput">
            <div className="productEnrollDetailInputText">
              1. 반납일시를 꼭 지켜주세요.
            </div>
            <div className="productEnrollDetailInputText">
              2. 물건을 깨끗하게 써주세요.
            </div>
            <div className="productEnrollDetailInputText">
              3. 파손시 학교로 바로 문의해주세요.
            </div>
          </div>
        </div>
        <div className="productEnrollSidebar"></div>
        <div className="productEnrollBtnContainer">
          <div className="productEnrollBtn">
            <input
              id="productEnrollBtn"
              type="submit"
              value="대여하기"
              onClick={handleProductRentBtn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRent;
