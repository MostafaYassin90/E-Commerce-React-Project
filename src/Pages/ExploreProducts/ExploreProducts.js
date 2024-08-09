import "./ExploreProducts.css";
import { exploreProducts } from "../../data/products-data";
import { Link } from "react-router-dom";
import { exploreWatchProducts } from "../../data/products-data";
import { useContext } from "react";
import { HolderEleContext } from "../../Context/hold-element";
import { WidnowSize } from "../../Context/WindowContext";

function ExploreProducts() {
  // Window Width
  let windowWindthContext = useContext(WidnowSize);
  let windowWidth = windowWindthContext.windowWidth;
  //  Context To Hold Explore Page
  let explorePage = useContext(HolderEleContext);

  return (
    <div className="explore-products" ref={explorePage.exploreHolder}>
      <div className={`${windowWidth > 992 ? "container" : "container-fluid"}`}>
        <h3 className="main-title">Explore Our Products</h3>
        <p className="main-description">You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or edit this layout. You can convert this template as any kind of ecommerce CMS theme as you wish.</p>

        <div className="container-products">
          {
            exploreProducts.map((product) => {
              return (
                <div className="product" key={product.id}>
                  <img src={product.image} alt="product-image"
                    style={{ width: "100%" }}
                  />
                  <h4>{product.title}</h4>
                  <p>Price: ${product.price}</p>
                  <Link to={`/view/product/men/${product.id}`}
                    className="btn btn-primary view-btn">View</Link>
                </div>
              );
            })
          }
        </div>

        <div className="container-products watch">
          {
            exploreWatchProducts.map((product) => {
              return (
                <div className="product" key={product.id}>
                  <img src={product.image} alt="product-image"
                    style={{ height: "330px" }}
                  />
                  <h4>{product.title}</h4>
                  <p>Price: {product.price}USD</p>
                  <Link to={`/view/product/men/${product.id}`}
                    className="btn btn-primary view-btn">View</Link>
                </div>
              );
            })
          }
        </div>

      </div>
    </div>
  );
}
export default ExploreProducts;