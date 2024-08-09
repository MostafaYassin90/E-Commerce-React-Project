import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import ViewProduct from "./Pages/Products/ViewProduct/ViewProduct";
import FavoriteProducts from "./Pages/Products/Favorite/FavoriteProducts";
import MenProducts from "./Pages/MenPage/MenPage";
import WomenPage from "./Pages/WomenPage/WomenPage";
import KidsPage from "./Pages/KidsPage/KidsPage";
import TopCart from "./Components/TopCart/TopCart";
import CartPage from "./Pages/Products/CartPage/CartPage";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { useContext } from "react";
import { HolderEleContext } from "./Context/hold-element";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import ExploreProducts from "./Pages/ExploreProducts/ExploreProducts";
import Shop from "./Pages/Shop/Shop";
import DarkModeProvider from "./Context/DarkMode";


function App() {
  // Context For Holder App To use it For Scroll To
  let holdeApp = useContext(HolderEleContext);

  return (
    <div className="app" ref={holdeApp.appHolder}>
      <DarkModeProvider>
        <TopCart />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/view/product/men/:viewProductId" element={<ViewProduct />} />
          <Route path="/products/cartpage" element={<CartPage />} />
          <Route path="/products/favorite" element={<FavoriteProducts />} />
          <Route path="/men/products" element={<MenProducts />} />
          <Route path="/women/products" element={<WomenPage />} />
          <Route path="/kids/products" element={<KidsPage />} />
          <Route path="/explore" element={<ExploreProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </DarkModeProvider>
    </div>
  );
}
export default App;

