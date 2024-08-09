import "./ProductsPagesStyle.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cart-reducer/cart-reducer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { menLatest } from "../../data/products-data";

function MenProducts() {
  let dispatch = useDispatch();

  return (
    <div className="men-products products-page">
      <div className="container">
        <h3 className="main-title">Men's Products</h3>
        <div className="product-container">
          {
            menLatest.map((product) => {
              return (
                <div className="product" key={product.id}>
                  <img src={product.image} alt="product-image" style={{ height: "320px" }} />
                  <h4>{product.title}</h4>
                  <p className="price">Price: ${product.price}</p>
                  <Link to={`/view/product/men/${product.id}`}
                    className="btn btn-dark view-btn">View</Link>
                </div>
              );
            })
          }

        </div>
      </div>
    </div>
  );
};
export default MenProducts;