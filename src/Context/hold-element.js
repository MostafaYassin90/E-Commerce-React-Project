import { createContext, useRef } from "react";


export let HolderEleContext = createContext();

function HolderEleContextProvider(props) {
  return (
    <HolderEleContext.Provider value={{
      appHolder: useRef(),
      exploreHolder: useRef()
    }}>
      {props.children}
    </HolderEleContext.Provider>
  );
}
export default HolderEleContextProvider;