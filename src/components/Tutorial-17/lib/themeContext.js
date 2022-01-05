// import createContext from "./OwnContext";//In this situation its not works
import React from "react";
const themeContext = React.createContext({
  theme: "light",
});

export default themeContext;
