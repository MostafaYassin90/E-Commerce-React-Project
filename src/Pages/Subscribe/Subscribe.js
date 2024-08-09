import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Subscribe.css";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { WidnowSize } from "../../Context/WindowContext";

function Subscribe() {
  let windowWindthContext = useContext(WidnowSize);
  let windowWidth = windowWindthContext.windowWidth;

  return (
    <div className="subscribe">
      <div className={`${windowWidth > 992 ? "container" : "container-fluid"}`}>
        <div className="subscribe-info">

          <div className="left">
            <h2>By Subscribing To Our Newsletter You <br /> Can Get 30% Off</h2>
            <p>Details to details is what makes MaxShop different from the other themes.</p>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Email Address" />
              <button><FontAwesomeIcon icon={faPaperPlane} /></button>
            </form>
          </div>

          <div className="right">

            <div className="one box">
              <div>
                <h4>Store Location</h4>
                <p>Egypt, Giza, Inside The Sphinx, Room Number 220</p>
              </div>
              <div>
                <h4>Phone</h4>
                <p>010-020-0340</p>
              </div>
            </div>
            <div className="two box">
              <div>
                <h4>Work Hours:</h4>
                <p>07:30 AM - 9:30 PM <br />Daily</p>
              </div>
              <div>
                <h4>Email:</h4>
                <p>about@company.com</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
export default Subscribe;