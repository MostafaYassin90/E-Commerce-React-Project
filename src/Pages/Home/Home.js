import TopCart from "../../Components/TopCart/TopCart";
import ExploreProducts from "../ExploreProducts/ExploreProducts";
import KidsLatest from "../Kids/KidsLatest";
import Landing from "../Landing/Landing";
import Men from "../men/Men";
import WomenLatest from "../Women/WomenLatest";
import Subscribe from "../Subscribe/Subscribe";

function Home() {


  return (
    <div className="home">
      <Landing />
      <Men />
      <WomenLatest />
      <KidsLatest />
      <ExploreProducts />
      <Subscribe />
    </div>
  );
}
export default Home;