import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faDolly, faHeadphonesSimple, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { DarkMode } from "../../Context/DarkMode";

function Footer() {
  let darkMode = useContext(DarkMode);

  // Hanle Dark Mode
  function handleDarkMode() {
    darkMode.setMode((prev) => prev === "light" ? "dark" : "light");
    localStorage.setItem("dark_mode", darkMode.mode);
  }


  return (
    <div className="footer">
      <div className="container">

        <div className="upper-footer">
          <div className="upper-info">
            <FontAwesomeIcon icon={faDolly} />
            <div className="info">
              <h6>FAST AND FREE DELIVERY</h6>
              <p>Free delivery for all orders over $100</p>
            </div>
          </div>
          <div className="upper-info">
            <FontAwesomeIcon icon={faHeadphonesSimple} />
            <div className="info">
              <h6>24/7 CUSTOMER SUPPORT</h6>
              <p>Friendly 24/7 customer support</p>
            </div>
          </div>
          <div className="upper-info">
            <FontAwesomeIcon icon={faShieldHalved} />
            <div className="info">
              <h6>MONEY BACK GUARANTEE</h6>
              <p>We return money within 30 days</p>
            </div>
          </div>
        </div>
        <div className="footer-info">
          <div className="one">
            <Link className="logo" to={"/"}>
              <div className="logo-circle">M</div>
              <div className="logo-text">
                <h3>Max Shop</h3>
                <p>ONLINE SHOP</p>
              </div>
            </Link>
            <p>1418 River Drive, Suite 35<br /> Cottonhall, CA 9622 United States</p>
            <p>sale@uomo.com <br /> +1 246-345-0695</p>
            <div className="mode"
              onClick={() => { handleDarkMode(); }}
            >
              <span className="light">🌙</span>
              <span className="dark">🌚</span>
              <span className="toggler"
                style={darkMode.mode === "light" ? { right: "2px" } : { left: "2px" }}>
              </span>
            </div>
          </div>



          <div className="two box">
            <h6>COMPANY</h6>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="three box">
            <h6>SHOP</h6>
            <ul>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Shop All</a></li>
            </ul>
          </div>
          <div className="four box">
            <h6>HELP</h6>
            <ul>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Find a Store</a></li>
              <li><a href="#">Legal & Privacy</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="socialmedia">
            <div><FontAwesomeIcon icon={faFacebookF} className="social-icon" /></div>
            <div><FontAwesomeIcon icon={faXTwitter} className="social-icon" /></div>
            <div><FontAwesomeIcon icon={faYoutube} className="social-icon" /></div>
            <div> <FontAwesomeIcon icon={faInstagram} className="social-icon" /></div>
          </div>
        </div>
      </div>
      <div className="copy-right"> &copy; 2024 Designed By Mostafa Yassin</div>
    </div>
  );
}
export default Footer;