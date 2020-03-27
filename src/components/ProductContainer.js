import React from "react";
import ProductItem from "./ProductItem";
import "./ProductContainer.css";

const ProductContainer = (props) => {
  const { list, redux_add_to_cart  } = props;


  const addToCart = (item) => {                  
    redux_add_to_cart({ partNo: item.number, pricing: item.pricing });
  };


  return (
    
      <div className="ProductContainer">
        <div className="ProductContainer-Content">
          {list.map((item) => {   // Maps all of the Products as items from the intial object onto the ProductItem component which is the typical React way of doing things.
              return <ProductItem key={item.id} item={item} addToCart={addToCart} />; 
            })}
        </div>
      </div>
    
  );
};

export default ProductContainer;
