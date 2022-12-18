import React, { useRef, useState } from "react";
import Navbar from "../components/navbar";
import { FiCamera } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProductEnroll = () => {
  const fileInputRef = useRef(null);
  const [fileImgSrc, setFileImgSrc] = useState(null);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [detail, setDetail] = useState("");
  const [product, setProduct] = useState({
    productFileImgSrc: "",
    productName: "",
    productPrice: "",
    productDetail: "",
  });

  const handleProductName = (e) => {
    setName(e.target.value);
  };

  const handleProductPrice = (e) => {
    setPrice(e.target.value);
  };

  const handleProductDetail = (e) => {
    setDetail(e.target.value);
  };

  const handleProductEnrollBtn = () => {
    navigate("/rent");
  };

  const handleProductImg = (e) => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      const resultImage = reader.result;
      setFileImgSrc(resultImage);
    };
  };

  const handleProductImgEnroll = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="TotalPage">
      <Navbar />
      <div className="Page">
        <div className="productEnrollTitle">상품 등록</div>
        <div className="productEnrollMiniTitle">기본 정보</div>
        <div className="productEnrollSidebar"></div>
        <div className="productEnrollImageContatiner">
          <div className="productEnrollImageTitle">상품 이미지</div>
          {!fileImgSrc && fileImgSrc === null ? (
            <div className="productEnrollImageInput">
              <input
                type="file"
                accept="image/jpg , image/jpeg, image/png"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleProductImg}
              />
              <div className="productEnrollImageIcon">
                <FiCamera color="#8e8e8e" size="40px" />
                <div
                  className="productEnrollImageInputText"
                  onClick={handleProductImgEnroll}
                  style={{ cursor: "pointer" }}
                >
                  이미지 등록
                </div>
              </div>
            </div>
          ) : (
            <div className="productEnrollImageInput">
              <img src={fileImgSrc} className="productEnrollImgInput"></img>
            </div>
          )}
        </div>
        <div className="productEnrollSidebar"></div>
        <div className="productEnrollNameContainer">
          <div className="productEnrollNameTitle">상품 이름</div>
          <div className="productEnrollNameInput">
            <input
              id="productEnrollNameInput"
              type="text"
              onChange={handleProductName}
            ></input>
          </div>
        </div>
        <div className="productEnrollSidebar"></div>
        <div className="productEnrollPriceContainer">
          <div className="productEnrollPriceTitle">가격</div>
          <div className="productEnrollPriceInput">
            <input
              id="productEnrollPriceInput"
              type="text"
              onChange={handleProductPrice}
            ></input>
          </div>
          <div className="productEnrollPriceTitle">원</div>
        </div>
        <div className="productEnrollSidebar"></div>
        <div className="productEnrollDetailContainer">
          <div className="productEnrollDetailTitle">설명</div>
          <div className="productEnrollDetailInput">
            <textarea
              id="productEnrollDetailInput"
              onChange={handleProductDetail}
            ></textarea>
          </div>
        </div>
        <div className="productEnrollSidebar"></div>
        <div className="productEnrollBtnContainer">
          <div className="productEnrollBtn">
            <input
              id="productEnrollBtn"
              type="submit"
              value="등록하기"
              onClick={handleProductEnrollBtn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEnroll;
