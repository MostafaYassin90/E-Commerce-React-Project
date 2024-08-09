import "./TopCart.css";
import { faCircleXmark, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { CartContext } from "../../Context/cart-context";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, minProduct } from "../../redux/cart-reducer/cart-reducer";

function TopCart() {
  //  Context To Open And Close Cart Menu
  let cartContext = useContext(CartContext);
  let openCart = cartContext.isOpen;

  //  Products From Cart
  let cartProducs = useSelector((state) => state.productsCart.productsCart);
  let dispatch = useDispatch();

  //  Total Price
  let totalPrice = cartProducs.reduce((acc, product) => {
    return acc = acc + (product.price * product.quantity);
  }, 0);


  return (
    <div className="topcart" style={{ right: openCart ? "0" : "-435px" }}>
      <div className="header">
        <p>{`SHOPPING BAG (${cartProducs.length})`}</p>
        <div className="close-cart"
          onClick={() => {
            cartContext.setIsOpen(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      <div className="body">
        {
          cartProducs.length > 0
            ?
            <>
              {
                cartProducs.map((product) => {
                  return (
                    <div className="product" key={product.id}>
                      <div className="holder-img">
                        <img src={product.image} alt="product-img" />
                      </div>
                      <div className="product-info">
                        <div className="info-head">
                          <p className="info-title">{product.title}</p>
                          <span className="info-close"
                            onClick={() => {
                              dispatch(deleteProduct(product));
                            }}
                          >
                            <FontAwesomeIcon icon={faXmark} />
                          </span>
                        </div>
                        <div className="info-color">Color: Yellow</div>
                        <div className="info-size">Size: L</div>
                        <div className="info-footer">
                          <div className="info-footer-quantity">
                            <span className="min"
                              onClick={() => {
                                dispatch(minProduct(product));
                              }}
                            >-</span>
                            <span className="number">{product.quantity}</span>
                            <span className="max"
                              onClick={() => {
                                dispatch(addProduct(product));
                              }}
                            >+</span>
                          </div>
                          <div className="info-footer-price">${product.price * product.quantity}</div>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </>
            :
            <p className="no-product-cart">Your cart is empty. Start shopping!</p>
        }
      </div>

      <div className="footer">
        <div className="subtotal">
          <span className="text">TotalPrice:</span> <span className="price">${totalPrice.toFixed(2)}</span>
        </div>
        <Link to={"/products/cartpage"} className="explore-shop btn btn-primary">View Cart</Link>
      </div>

    </div>
  );
}
export default TopCart;