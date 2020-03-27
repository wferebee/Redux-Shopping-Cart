import React from "react";
import "./ProductItem.css";

const ProductItem = (props) => {
  const { item, addToCart  } = props;

  return (
    <div>
    <div className="ProductItem">
      <img className="ProductItem-Img" src={item.img} alt="Product_Image"  height="125" width="125"  />
      
      <div className="ProductItem-Info">
      <p className="ProductItem-Name">{item.name}</p>
      <p className="ProductItem-Number">PartNo: <span className="PartNumber">{item.number}</span></p>
      <p className="ProductItem-Pricing">${item.pricing}</p>
      <button className="ProductItem-Button" onClick={() => addToCart(item)}>
            Add to Cart
          </button>    
      </div>
    </div>
    <hr></hr>
    </div>
  );
};

export default ProductItem;
