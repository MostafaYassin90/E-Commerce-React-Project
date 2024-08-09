import "./ViewProduct.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/cart-reducer/cart-reducer";
import { addProductFav, deleteFavoriteProduct } from "../../../redux/favorite.reducer";
import { CartContext } from "../../../Context/cart-context";
import { allProducts } from "../../../data/products-data";

function ViewProduct() {
  let openCart = useContext(CartContext);
  let favoriteBtn = useRef();
  let { viewProductId } = useParams();
  let [product, setProduct] = useState([]);

  useEffect(() => {
    function filterProducts() {
      let productData = allProducts.filter((product) => product.id === +viewProductId);
      setProduct(productData);
    }
    filterProducts();
  }, []);

  // Dispatch To Send Action
  let dispatch = useDispatch();

  // Add Style To Give Color Red To Favorit Button
  let [btnAddFav, setBtnAddFav] = useState(false);

  return (
    <div className="view-product">

      <div className="back-img">
        <div className="text">
          <h2>Single Product Page</h2>
          <p>You Clicked View To Know More About Our Awesome Product</p>
        </div>
      </div>
      <div className="product">
        <div className="container">
          <div className="left">
            {
              product.map((product) =>
                <img src={product.image} alt="product-image" key={product.id} />)
            }
          </div>
          <div className="right">
            {
              product.map((product) => {
                return (
                  <div className="product-info" key={product.id}>
                    <div className="head">
                      <h4 className="title">{product.title}</h4>
                      <span className="rate">
                        <FontAwesomeIcon icon={faStar} className="f" />
                        <FontAwesomeIcon icon={faStar} className="s" />
                        <FontAwesomeIcon icon={faStar} className="t" />
                        <FontAwesomeIcon icon={faStar} className="fo" />
                        <FontAwesomeIcon icon={faStar} className="fi" />
                      </span>
                    </div>
                    <p className="price">Price: {product.price}$</p>
                    <p className="description">Description: {product.description}</p>
                    <div className="quote">
                      <FontAwesomeIcon icon={faQuoteLeft} />
                      <p className="quote-text">Lorem ipsum dolor sit amet,
                        consectetur <br /> adipiscing elit, sed do eiuski smod.</p>
                    </div>
                    <button className="btn-cart"
                      onClick={() => {
                        dispatch(addProduct(product));
                        openCart.setIsOpen(true);
                      }}
                    >Add To Cart</button>
                    {
                      btnAddFav
                        ?
                        <button className="btn-favorite" ref={favoriteBtn}
                          onClick={() => {
                            dispatch(deleteFavoriteProduct(product));
                            setBtnAddFav(false);
                          }}
                          style={{ color: "#f00" }}
                        >Remove From Faviorte</button>
                        :
                        <button className="btn-favorite" ref={favoriteBtn}
                          onClick={() => {
                            dispatch(addProductFav(product));
                            setBtnAddFav(true);
                          }}
                          style={{ color: "#000" }}
                        >Add To Faviorte</button>
                    }
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default ViewProduct;