import React, { useState } from "react";
import Navbar from "../components/navbar";
import { FaListAlt } from "react-icons/fa";
import ProductBoxAll from "../components/productBoxAll";
import { useNavigate } from "react-router-dom";

const Rent = () => {
  const [isClicked, setIsClicked] = useState(true);

  const navigate = useNavigate();

  const products = [
    {
      index: "1",
      title: "볼펜",
      price: "1000원",
      state: true,
      src: "img/pen.png",
    },
    {
      index: "2",
      title: "무선마우스",
      price: "3000원",
      state: true,
      src: "img/mouse.png",
    },
    {
      index: "3",
      title: "공학용 계산기",
      price: "1500원",
      state: true,
      src: "img/calculator.png",
    },
    {
      index: "4",
      title: "C프로그래밍 교재",
      price: "2000원",
      state: true,
      src: "img/coding.png",
    },
    {
      index: "5",
      title: "우산",
      price: "1000원",
      state: true,
      src: "img/umbrella.png",
    },
    {
      index: "6",
      title: "무선키보드",
      price: "5000원",
      state: true,
      src: "img/keyboard.png",
    },
    {
      index: "7",
      title: "자바프로그래밍 교재",
      price: "2000원",
      state: true,
      src: "img/java.png",
    },
    {
      index: "8",
      title: "공책",
      price: "2000원",
      state: true,
      src: "img/note.png",
    },
    {
      index: "9",
      title: "컴퓨터사인펜",
      price: "1000원",
      state: true,
      src: "img/computerPen.png",
    },
    {
      index: "10",
      title: "토익 교재",
      price: "2000원",
      state: true,
      src: "img/toeic.png",
    },
    {
      index: "11",
      title: "줄 이어폰",
      price: "1000원",
      state: true,
      src: "img/earphone.png",
    },
    {
      index: "12",
      title: "무선 이어폰",
      price: "1500원",
      state: true,
      src: "img/earphoneNo.png",
    },
  ];

  return (
    <div className="totalPage">
      {isClicked === false ? (
        <div
          className="rentPostBtn"
          onClick={() => {
            navigate("/rent/enroll");
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
                    src={product.src}
                    index={product.index}
                    title={product.title}
                    price={product.price}
                  />
                );
              })
            : products.map((product) => {
                return (
                  <ProductBoxAll
                    src={product.src}
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
