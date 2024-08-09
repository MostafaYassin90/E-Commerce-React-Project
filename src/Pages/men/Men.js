import "./Men.css";
import { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { menLatest } from "../../data/products-data";
import { Link } from "react-router-dom";
import { WidnowSize } from "../../Context/WindowContext";
import { menProducts } from "../../data/products-data";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cart-reducer/cart-reducer";
import { addProductFav } from "../../redux/favorite.reducer";
import { CartContext } from "../../Context/cart-context";

function Men() {
  let cartContext = useContext(CartContext);

  let productWidth = useRef();

  // Ref To Define Products Slider
  let productSlider = useRef();

  let [currentProduct, setCurrentProduct] = useState(0);
  //  Window With
  let windowWidthContext = useContext(WidnowSize);
  let windowWidth = windowWidthContext.windowWidth;

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
          <h3>Men's Latest</h3>
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
              menLatest.map((product, index) => {
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
                  menProducts.map((products, index) => {
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
                      </div>
                    );
                  })
                }
              </div>
              {
                windowWidth <= 992 &&
                <ul className="bullets">
                  {menProducts.map((product, index) => {
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
        {/* Responsive */}

        {/* {
          windowWidth <= 992 &&
          <div className="slider">

            <div className="slides">
              {
                menProducts.map((products, index) => {
                  return (
                    <div className="slide" key={index}>
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
                                  <Link className="cart">Add To Cart</Link>
                                  <div className="links">
                                    <Link className="view"
                                      to={`/view/product/men/${product.id}`}
                                    >Quick View</Link>
                                    <i className="bi bi-eye view-eye icon"></i>
                                    <FontAwesomeIcon icon={faHeart} className="product-fav-icon icon" />
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

          </div>
        } */}


      </div>
    </div>
  );
}
export default Men;