import { useContext, useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartContext } from "../../Context/cart-context";
import { HolderEleContext } from "../../Context/hold-element";
import { WidnowSize } from "../../Context/WindowContext";


function Navbar() {
  let windowWidthContext = useContext(WidnowSize);
  let windowWidth = windowWidthContext.windowWidth;
  // state For Calculate ScrollY
  let [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, []);

  // Context To go To Explore Page From Explore Link
  let holderContex = useContext(HolderEleContext);
  let explerPage = holderContex.exploreHolder.current;

  function goToExplore() {
    explerPage.scrollIntoView();
  }

  // Cart Context
  let cartContext = useContext(CartContext);


  //  Redux Select
  let productsCartCount = useSelector((state) => state.productsCart.productsCart);
  let productsFavorite = useSelector((state) => state.productsFavorite.favoriteProducts);

  // Nav Links To Toggler
  let linksMenu = useRef();

  //  Fn Handle Toggler Menu
  let handleToggler = () => {
    linksMenu.current.classList.toggle("open");
  };

  return (
    <div className={`navbar-app ${scrollY > 500 ? "sticky" : null}`}>

      <div className={`${windowWidth > 992 ? "container" : "container-fluid"}`}>
        <Link className="logo" to={"/"}>
          <div className="logo-circle">M</div>
          <div className="logo-text">
            <h3>Max Shop</h3>
            <p>ONLINE SHOP</p>
          </div>
        </Link>

        <div className="navbar-app-nav">

          <ul className="links" ref={linksMenu}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to={"/shop"}>Shop</NavLink></li>
            <li><NavLink to="/men/products">Men's</NavLink></li>
            <li><NavLink to="/women/products">Women's</NavLink></li>
            <li><NavLink to="/kids/products">Kids's</NavLink></li>
            <li><NavLink to="/explore">Explore</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          <div className="icons-shoping">
            <div className="icon-cart" title="Cart"
              onClick={() => {
                cartContext.setIsOpen(true);
              }}
              data-count={productsCartCount.length}>
              <i className="bi bi-bag navbar-icon-cart"></i>
            </div>
            <Link className="icon-favorite" to={"/products/favorite"} title="WishList">
              <FontAwesomeIcon icon={faHeart}
                style={{ color: productsFavorite.length > 0 && "red" }}
                className="navbar-icon-favorite" />
            </Link>
          </div>

          <div className="toggle-icon"
            onClick={handleToggler}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>


        </div>

      </div>
    </div>
  );
}
export default Navbar;