import "./FavoriteProducts.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../redux/cart-reducer/cart-reducer";
import { deleteFavoriteProduct } from "../../../redux/favorite.reducer";

function FavoriteProducts() {

  let favoriteProducts = useSelector((state) => state.productsFavorite.favoriteProducts);
  let dispatch = useDispatch();

  return (
    <div className="fav-products">
      <div className="container">
        <h3 className="main-title">WishList</h3>
        {
          favoriteProducts.length > 0
            ?
            <>
              <div className="row">
                {
                  favoriteProducts.map((product) => {
                    return (
                      <div className="col-md-6 col-lg-4 col-xl-3 gap-2" key={product.id}>
                        <div className="product">
                          <img src={product.image} alt="product-image" />
                          <h4>{product.title}</h4>
                          <p>{product.price} USD</p>
                          <button className="btn-add"
                            onClick={() => {
                              dispatch(addProduct(product));
                            }}
                          >Add To Cart</button>
                          <button className="btn-delete"
                            onClick={() => {
                              dispatch(deleteFavoriteProduct(product));
                            }}
                          >Delete</button>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </>
            :
            <p className="no-product">No Product Added To WishList Yet.</p>
        }
      </div>
    </div>
  );
}
export default FavoriteProducts;