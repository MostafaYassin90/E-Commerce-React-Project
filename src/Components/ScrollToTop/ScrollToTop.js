import "./ScrollToTop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { HolderEleContext } from "../../Context/hold-element";

function ScrollToTop() {
  let holderApp = useContext(HolderEleContext);
  let appPage = holderApp.appHolder.current;
  let [scrollY, setScrollY] = useState(window.scrollY);


  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  function ScrollToTop() {
    appPage.scrollIntoView();
  }

  return (
    <div className="scroll-top"
      style={{ display: scrollY > 800 ? "flex" : "none" }}
      onClick={() => {
        ScrollToTop();
      }}
    >
      <FontAwesomeIcon icon={faArrowUp} className="arrow-top" />
    </div>
  );
}
export default ScrollToTop;