import React from "react";
import Navbar from "../components/navbar";
import { FiCamera } from "react-icons/fi";

const ProductEnroll = () => {
  return (
    <div className="TotalPage">
      <Navbar />
      <div className="Page">
        <div className="productEnrollTitle">상품 등록</div>
        <div className="productEnrollMiniTitle">기본 정보</div>
        <div className="productEnrollSidebar"></div>
        <div className="productEnrollImageContatiner">
          <div className="productEnrollImageTitle">상품 이미지</div>
          <div className="productEnrollImageInput">
            <div className="productEnrollImageIcon">
              <FiCamera color="#8e8e8e" size="40px" />
              <div className="productEnrollImageInputText">이미지 등록</div>
            </div>
          </div>
        </div>
        <div className="productEnrollSidebar"></div>
        <div className="productEnrollNameContainer">
          <div className="productEnrollNameTitle">상품 이름</div>
          <div className="productEnrollNameInput">
            <input id="productEnrollNameInput" type="text"></input>
          </div>
        </div>
        <div className="productEnrollSidebar"></div>
        <div className="productEnrollPriceContainer">
          <div className="productEnrollPriceTitle">가격</div>
          <div className="productEnrollPriceInput">
            <input id="productEnrollPriceInput" type="text"></input>
          </div>
          <div className="productEnrollPriceTitle">원</div>
        </div>
        <div className="productEnrollSidebar"></div>
        <div className="productEnrollDetailContainer">
          <div className="productEnrollDetailTitle">설명</div>
          <div className="productEnrollDetailInput">
            <textarea id="productEnrollDetailInput"></textarea>
          </div>
        </div>
        <div className="productEnrollSidebar"></div>
        <div className="productEnrollBtnContainer">
          <div className="productEnrollBtn">
            <input id="productEnrollBtn" type="submit" value="등록하기" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEnroll;
