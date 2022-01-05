// import React, { Component } from "react";
// import HoverCounter from "./HoverCounter";
// import themeContext from "./lib/themeContext";
//
// export default class Content extends Component {
//   render() {
// const { count, handleCount } = this.context;
// return (
//   <div>
// {
/* <h1>This is Content</h1> */
// }
// {
/* <HoverCounter count={count} handleCount={handleCount} /> */
// }
// {
/* </div> */
// }
// );
//   }
// }
//
// Content.contextType = themeContext;

import React, { useContext } from "react";
import HoverCounter from "./HoverCounter";
import themeContext from "./lib/themeContext";

export default function Content() {
  const context = useContext(themeContext);
  const { count, handleCount } = context;
  console.log("Content Rendered");
  return (
    <div>
      <h1>This is Content</h1>
      <HoverCounter count={count} handleCount={handleCount} />
    </div>
  );
}
