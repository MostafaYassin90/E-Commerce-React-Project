import "./Shop.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { categories } from "../../data/products-data";
import { allProducts } from "../../data/products-data";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cart-reducer/cart-reducer";
import { CartContext } from "../../Context/cart-context";
import { addProductFav } from "../../redux/favorite.reducer";

function Shop() {
  let [activeCat, setActiveCat] = useState("all");
  let [products, setProducts] = useState([]);
  let [filterProducts, setFilterProducts] = useState([]);
  let cartContext = useContext(CartContext);
  let dispatch = useDispatch();

  useEffect(() => {
    setProducts(allProducts);
    setFilterProducts(allProducts);
  }, []);

  // Filter Prducts By Cateory
  function handleFilterProducts(category) {
    let filteringProducts = products.filter((product) => product.category === category);
    setFilterProducts(filteringProducts);
  }

  return (
    <div className="shop">
      <div className="container">
        <h2 className="main-title">Our Shop</h2>
        <div className="holder-cat">
          <button
            className={`${activeCat === "all" ? "active category" : "category"}`}
            onClick={() => { setActiveCat("all"); setFilterProducts(allProducts); }}
          >ALL</button>
          {
            categories.map((category, index) => {
              return (
                <button className={`${activeCat === category ? "active category" : "category"}`}
                  key={index}
                  onClick={() => { setActiveCat(category); handleFilterProducts(category); }}
                >{category}</button>
              );
            })
          }
        </div>
        <div className="holder-products">
          {
            filterProducts.map((product, index) => {
              return (
                <div className="product" key={product.id}>
                  <div className="holder-image">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="product-info">

                    <h4 className="title">{product.title}</h4>
                    <div className="price-rate">
                      <p className="price">Price: ${product.price}</p>
                      <div className="rates">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>

                    <div className="shop-actions">
                      <button className="cart-btn"
                        onClick={() => {
                          dispatch(addProduct(product));
                          cartContext.setIsOpen(true);
                        }}
                      >Add To Cart</button>
                      <Link to={`/view/product/men/${product.id}`} className="view-btn">Quick View</Link>
                      <button className="fav-btn"
                        onClick={() => { dispatch(addProductFav(product)); }}
                      ><FontAwesomeIcon icon={faHeart} /></button>
                    </div>

                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
export default Shop;