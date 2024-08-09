import "./Landing.css";

function Landing() {
  return (
    <div className="landing">

      <div className="left">
        <img src={require("../../assets/images/landing-main.jpg")} alt="lan-image" />
        <div className="left-text">
          <h2>We Are MaxShop</h2>
          <p>Awesome,Clean & Creative HTML5 Template</p>
          <button>Purchase Now!</button>
        </div>
      </div>

      <div className="right"> {/* Start Right Ele*/}

        <div className="box">
          <img src={require("../../assets/images/women-04.jpg")} />
          {/* <img src={require("../../assets/images/landing-women (2).jpg")} /> */}
          <div className="first-text">
            <h3>Women</h3>
            <p>Best Clothes For Women</p>
          </div>

          <div className="second">
            <h3>Women</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <button className="discover-bnt">Discover More</button>
          </div>
        </div>

        <div className="box">

          <img src={require("../../assets/images/landing-men.jpg")} />
          <div className="first-text">
            <h3>Men</h3>
            <p>Best Clothes For Women</p>
          </div>

          <div className="second">
            <h3>Men</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <button className="discover-bnt">Discover More</button>
          </div>
        </div>

        <div className="box">

          <img src={require("../../assets/images/landing-kids.png")} />
          <div className="first-text">
            <h3>Kids</h3>
            <p>Best Clothes For Women</p>
          </div>

          <div className="second">
            <h3>Kids</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <button className="discover-bnt">Discover More</button>
          </div>
        </div>

        <div className="box">
          <img src={require("../../assets/images/landing-acc..jpg")} />
          <div className="first-text">
            <h3>Accessories</h3>
            <p>Best Clothes For Women</p>
          </div>
          <div className="second">
            <h3>Accessories</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <button className="discover-btn">Discover More</button>
          </div>
        </div>



      </div> {/* End Right Ele*/}

    </div>
  );
}
export default Landing;