import "../men/Men.css";
import { useContext, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { womenLatest } from "../../data/products-data";
import { Link } from "react-router-dom";
import { WidnowSize } from "../../Context/WindowContext";
import { addProduct } from "../../redux/cart-reducer/cart-reducer";
import { addProductFav } from "../../redux/favorite.reducer";
import { useDispatch } from "react-redux";
import { womenProducts } from "../../data/products-data";
import { CartContext } from "../../Context/cart-context";

function WomenLatest() {
  let cartContext = useContext(CartContext);
  let [currentProduct, setCurrentProduct] = useState(0);
  //  Window With
  let windowWidthContext = useContext(WidnowSize);
  let windowWidth = windowWidthContext.windowWidth;

  // Ref To Define Products Slider
  let productSlider = useRef();
  let productWidth = useRef();

  let dispatch = useDispatch();

  let arrowNextProduct = () => {
    productSlider.current.scrollBy((productSlider.current.offsetWidth + 28), 0);
  };

  let arrowPreviousProduct = () => {
    productSlider.current.scrollBy(-productSlider.current.offsetWidth + -28, 0);
  };


  return (
    <div className="men latest">
      <div className={`${windowWidth > 1200 ? "container " : "container-fluid"}`}>
        <div className="latest-title">
          <h3>Women's Latest</h3>
          <p>Details to details is what makes Hexashop different from the other themes.</p>
        </div>

        <div className="holder">
          <div className="holder-arrow">
            <FontAwesomeIcon icon={faChevronLeft} className="arrow arrow-left"
              onClick={arrowPreviousProduct}
            />
          </div>
          <div className="holder-products" ref={productSlider}>
            {
              womenLatest.map((product) => {
                return (
                  <div className="product" key={product.id} ref={productWidth}>
                    <img src={product.image} alt="product-image"
                      style={{ height: "405px" }}
                    />
                    <div className="product-info">
                      <h4 className="product-title">{product.title}</h4>
                      <p className="product-price">Price: ${product.price}</p>
                      <div className="product-action">
                        <Link className="cart"
                          onClick={() => {
                            dispatch(addProduct(product));
                            cartContext.setIsOpen(true);
                          }}
                        >Add To Cart</Link>
                        <div className="links">
                          <Link className="view"
                            to={`/view/product/men/${product.id}`}
                          >Quick View</Link>
                          <Link className="bi bi-eye view-eye icon"
                            to={`/view/product/men/${product.id}`}
                          ></Link>
                          <FontAwesomeIcon icon={faHeart} className="product-fav-icon icon"
                            onClick={() => {
                              dispatch(addProductFav(product));
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            }
            {/* Reponsive */}
            <div className="slider">
              <div className="slides">
                {
                  womenProducts.map((products, index) => {
                    return (
                      <div
                        className={`${currentProduct === index ? "slide" : "slide hidden"}`}
                        key={index}>
                        {
                          products.map((product) => {
                            return (
                              <div className="product"
                                key={product.id} ref={productWidth}>
                                <img src={product.image} alt="product-image" />
                                <div className="product-info">
                                  <h4 className="product-title">{product.title}</h4>
                                  <p className="product-price">Price: ${product.price}</p>
                                  <div className="product-action">
                                    <Link className="cart"
                                      onClick={() => {
                                        dispatch(addProduct(product));
                                      }}
                                    >Add To Cart</Link>
                                    <div className="links">
                                      <Link className="view"
                                        to={`/view/product/men/${product.id}`}
                                      >Quick View</Link>
                                      <Link className="bi bi-eye view-eye icon"
                                        to={`/view/product/men/${product.id}`}
                                      ></Link>
                                      <FontAwesomeIcon icon={faHeart} className="product-fav-icon icon"
                                        onClick={() => {
                                          dispatch(addProductFav(product));
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        }
                      </div>
                    );
                  })
                }
              </div>
              {
                windowWidth <= 992 &&
                <ul className="bullets">
                  {womenProducts.map((product, index) => {
                    return (
                      <li
                        className={`${currentProduct === index ? "bullet" : "bullet inactive"}`}
                        key={index}
                        onClick={() => {
                          setCurrentProduct(index);
                        }}
                      ></li>
                    );
                  })}
                </ul>
              }
            </div>
          </div>
          <div className="holder-arrow">
            <FontAwesomeIcon icon={faChevronRight} className="arrow arrow-right"
              onClick={arrowNextProduct}
            />
          </div>
        </div>


      </div>
    </div>
  );
}
export default WomenLatest;