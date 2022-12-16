import React from "react";

const ProductBox = (props) => {
  return (
    <>
      <div className="productBox">
        <div className="productBoxImage">
          <div className="productBoxRankNumber">{props.rank}</div>
          <img src={props.src} className="productBoxImg"></img>
        </div>
        <div className="productBoxTitle">{props.title}</div>
        <div className="productBoxPrice">{props.price}</div>
      </div>
    </>
  );
};

export default ProductBox;
