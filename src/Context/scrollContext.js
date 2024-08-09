import { createContext, useRef } from "react";

export let ScrollContext = createContext();

function ScrollContextProvider(props) {
  return (
    <ScrollContext.Provider value={{
      homeSection: useRef(),
      menSection: useRef(),
      womenSection: useRef(),
    }}>
      {props.children}
    </ScrollContext.Provider>
  );
}
export default ScrollContextProvider;