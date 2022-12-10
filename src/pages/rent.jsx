import React, { useState } from "react";
import Navbar from "../components/navbar";
import { FaListAlt } from "react-icons/fa";
import ProductBoxAll from "../components/productBoxAll";
import { useNavigate } from "react-router-dom";

const Rent = () => {
  const [isClicked, setIsClicked] = useState(true);

  const navigate = useNavigate();

  const products = [
    { index: "1", title: "우산", price: "1000원", state: true },
    { index: "2", title: "천막 세트", price: "20000원", state: true },
    { index: "3", title: "공학용 계산기", price: "1500원", state: true },
    { index: "4", title: "C프로그래밍 교재", price: "2000원", state: true },
    { index: "5", title: "우산", price: "1000원", state: true },
    { index: "6", title: "천막 세트", price: "20000원", state: true },
    { index: "7", title: "공학용 계산기", price: "1500원", state: true },
    { index: "8", title: "C프로그래밍 교재", price: "2000원", state: true },
    { index: "9", title: "우산", price: "1000원", state: true },
    { index: "10", title: "천막 세트", price: "20000원", state: true },
    { index: "11", title: "공학용 계산기", price: "1500원", state: true },
    { index: "12", title: "C프로그래밍 교재", price: "2000원", state: true },
  ];

  return (
    <div className="totalPage">
      {isClicked === false ? (
        <div
          className="rentPostBtn"
          onClick={() => {
            navigate("/rent/eroll");
          }}
        >
          +
        </div>
      ) : (
        <></>
      )}
      <Navbar />
      <div className="Page">
        <div className="rentTitle">
          <span
            className={
              isClicked === true
                ? "rentSchoolStudentClicked"
                : "rentSchoolStudentNotClicked"
            }
            onClick={() => setIsClicked(true)}
          >
            학교-학생
          </span>
          <span
            className={
              isClicked === true
                ? "rentStudentStudentNotClicked"
                : "rentStudentStudentClicked"
            }
            onClick={() => setIsClicked(false)}
          >
            학생-학생
          </span>
        </div>
        <div className="rentContainer">
          <span className="rentProductIcon">
            <FaListAlt color="#E1605C" size="30px" />
          </span>
          <span className="rentProductTitle">대여물품 목록</span>
        </div>
        <div className="rentProductContainer">
          {isClicked === !true
            ? products.map((product) => {
                return (
                  <ProductBoxAll
                    index={product.index}
                    title={product.title}
                    price={product.price}
                  />
                );
              })
            : products.map((product) => {
                return (
                  <ProductBoxAll
                    index={product.index}
                    title={product.title}
                    price={"학교 제품"}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Rent;
