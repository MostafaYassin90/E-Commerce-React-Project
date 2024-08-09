import { createContext, useEffect, useState } from "react";

export let WidnowSize = createContext();

function WindowProvider(props) {
  let [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {

    function handleWidnowWith() {
      setWindowWidth(window.innerWidth);
    }
    handleWidnowWith();
    window.addEventListener("resize", handleWidnowWith);

    return () => {
      window.removeEventListener("resize", handleWidnowWith);
    };

  }, []);


  return (
    <WidnowSize.Provider value={{ windowWidth, setWindowWidth }}>
      {props.children}
    </WidnowSize.Provider>
  );
}
export default WindowProvider;