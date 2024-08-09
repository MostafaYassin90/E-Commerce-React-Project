import "./Products.css";
import { products } from "../../data/products-data";
import { Link } from "react-router-dom";

function Products() {

  return (
    <div className="products py-5">
      <h1 className="main-title">Our Porducts</h1>
      <div className="container">
        <div className="row">

          {
            products.map((product) => {
              return (
                <div className="col-md-6 col-lg-4 col-xl-3" key={product.id}>
                  <div className="product text-center">
                    <img src={product.image} alt={product.title}
                      style={{ width: "100%" }}
                    />
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">{product.price}</p>
                    <Link to={`/products/product/details/${product.id}`}
                      className="btn btn-primary">Details</Link>
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
export default Products;