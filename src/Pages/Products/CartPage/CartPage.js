import "./CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, clearCart, deleteProduct, minProduct } from "../../../redux/cart-reducer/cart-reducer";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { WidnowSize } from "../../../Context/WindowContext";

function CartPage() {
  let windowSize = useContext(WidnowSize);
  let productsCart = useSelector((state) => state.productsCart.productsCart);
  let dispatch = useDispatch();

  // Get Total Price
  let totalPrice = 0;
  productsCart.map((product) => totalPrice = totalPrice + (product.price * product.quantity));

  return (
    <div className="cart-page">
      <div className={`${windowSize.windowWidth < 992 ? "container-fluid" : "container"}`}>
        <h3 className="main-title">Cart</h3>
        {
          windowSize.windowWidth < 768
            ?
            productsCart.length > 0
              ?
              productsCart.map((product) => {
                return (
                  <>
                    <button className="btn mb-3 clear-cart-btn"
                      onClick={() => {
                        dispatch(clearCart());
                      }}
                    >Clear Cart</button>

                    <div className="small-product" key={product.id}>
                      <div className="holder-img">
                        <img src={product.image} alt={product.title} />
                      </div>
                      <div className="small-product-info">
                        <div className="top">
                          <h5 className="top-title">{product.title}</h5>
                          <FontAwesomeIcon icon={faXmark} className="top-icon"
                            onClick={() => { dispatch(deleteProduct(product)); }}
                          />
                        </div>
                        <div className="center">
                          <p className="color">Color: Yellow</p>
                          <p className="size">Size: L</p>
                        </div>
                        <div className="bot">
                          <div className="quan">
                            <span className="min"
                              onClick={() => { dispatch(minProduct(product)); }}
                            >-</span>
                            <span className="num">{product.quantity}</span>
                            <span className="max"
                              onClick={() => { dispatch(addProduct(product)); }}
                            >+</span>
                          </div>
                          <div className="price">${product.price * product.quantity}</div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
              :
              <p className="no-product">No Product Added To Cart Yet.</p>
            :
            productsCart.length > 0
              ?
              <>
                <button className="btn mb-3 clear-cart-btn"
                  onClick={() => {
                    dispatch(clearCart());
                  }}
                >Clear Cart</button>
                {/* Start Table */}
                <table className="table table-white">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Details</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>SubTotal</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      productsCart.map((product) => {
                        return (
                          <tr key={product.id}>
                            {/* Product */}
                            <td className="product">
                              <img src={product.image} alt="product-img" style={{ width: "100px" }} />
                            </td>
                            <td>
                              <div className="product-info">
                                <p className="title">{product.title.slice(0.10)}</p>
                                <p className="color">color: red</p>
                                <p className="size">Size: L</p>
                              </div>
                            </td>

                            {/* Price */}
                            <td><div className="price">${product.price}</div></td>
                            {/* Quantity */}
                            <td>
                              <div className="holder-quantity">
                                <div className="quantity">
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
                              </div>
                            </td>
                            {/* SubTotal */}
                            <td><div className="subtotal">${product.price * product.quantity}</div></td>
                            {/* Delete Icon */}
                            <td>
                              <div>
                                <div className="close-btn"
                                  onClick={() => {
                                    dispatch(deleteProduct(product));
                                  }}
                                ><FontAwesomeIcon icon={faXmark} />
                                </div>
                              </div>
                            </td>
                          </tr>

                        );
                      })
                    }
                  </tbody>
                </table>
                <div className="total-price">
                  <div className="price-text">Total Price</div>
                  <div className="price-number">{totalPrice.toFixed(2)} $</div>
                </div>
              </>
              :
              <p className="no-product">No Product Added To Cart Yet.</p>
        }
      </div>
    </div>
  );
}
export default CartPage;