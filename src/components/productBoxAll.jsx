import React from "react";
import { useNavigate } from "react-router-dom";

const ProductBoxAll = (props) => {
  const navigate = useNavigate();

  const handleProduct = () => {
    navigate("/rent/product", { state: props });
  };

  return (
    <>
      <div className="productBoxStudent">
        <div className="productBoxImage" onClick={handleProduct}>
          <img src={props.src} className="productBoxAllImg"></img>
        </div>
        <div className="productBoxTitle">{props.title}</div>
        <div className="productBoxPrice">{props.price}</div>
      </div>
    </>
  );
};

export default ProductBoxAll;
