import "../MenPage/ProductsPagesStyle.css";

import { Link } from "react-router-dom";
import { womenLatest } from "../../data/products-data";

function WomenPage() {

  return (
    <div className="men-products products-page">
      <div className="container">
        <h3 className="main-title">Womens's Products</h3>
        <div className="product-container">
          {
            womenLatest.map((product) => {
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
export default WomenPage;