import { createContext, useState } from "react";

export let DarkMode = createContext();

function DarkModeProvider({ children }) {
  let [mode, setMode] = useState("light");

  return (
    <DarkMode.Provider value={{ mode, setMode }}>
      <div className={`theme ${mode}`}>
        {children}
      </div>
    </DarkMode.Provider>
  );
}
export default DarkModeProvider;