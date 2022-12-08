import React from "react";

const ProductBoxStudent = (props) => {
  return (
    <>
      <div className="productBoxStudent">
        <div className="productBoxImage"></div>
        <div className="productBoxTitle">{props.title}</div>
        <div className="productBoxPrice">{props.price}</div>
      </div>
    </>
  );
};

export default ProductBoxStudent;
