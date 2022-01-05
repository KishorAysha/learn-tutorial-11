import React from "react";
// import ClickCounter2 from "./components/Tutorial-14/render-props/ClickCounter2";
// import ClickCounter from "./components/Tutorial-14/render-props/ClickCounter";
// import Breaket from "./components/Tutorial-12/composition/Breaket";
// import Breaket2 from "./components/Tutorial-12/composition/Breaket2";
// import Emoji from "./components/Tutorial-12/composition/Emoji";
// import Emoji2 from "./components/Tutorial-12/composition/Emoji2";
// import Emoji3 from "./components/Tutorial-12/composition/Emoji3";
// import Star3 from "./components/Tutorial-12/composition/Star3";
// Tutorial-11:
// import Calculator from "./components/Calculator";
// import Calculator2 from "./components/Calculator2";
//  import Calculator3 from "./components/Tutorial-11/Calculator3";
// -----------------------------------------------------------------//
// Tutorial-12:
// inheritance:
// import Text from "./components/Tutorial-12/inheritance/Text";
//Composition:
// import Text from "./components/Tutorial-12/composition/Text";
// import Text2 from "./components/Tutorial-12/composition/Text2";
// import Text3 from "./components/Tutorial-12/composition/Text3";
// Tutorial-13:
// import ClickCounter from "./components/Tutorial-13/ClickCounter";
// import HoverCounter from "./components/Tutorial-13/HoverCounter";
// import ClickCounter from "./components/Tutorial-13/HOC/ClickCounter";
// import ClickCounter2 from "./components/Tutorial-13/HOC/ClickCounter2";
// import HoverCounter from "./components/Tutorial-13/HOC/HoverCounter";
// import HoverCounter2 from "./components/Tutorial-13/HOC/HoverCounter2";
// Tutorial-14:
// import ClickCounter from "./components/Tutorial-14/ClickCounter";
// import HoverCounter from "./components/Tutorial-14/HoverCounter";
// import User from "./components/Tutorial-14/User";
// import Counter from "./components/Tutorial-14/render-props/Counter";
// import HoverCounter from "./components/Tutorial-14/render-props/HoverCounter";
// import Counter2 from "./components/Tutorial-14/render-props/Counter2";
// import HoverCounter2 from "./components/Tutorial-14/render-props/HoverCounter2";

export default function App() {
  return (
    <>
      {/* Tutorial-11 */}
      {/* <Calculator /> */}
      {/* <Calculator2 /> */}
      {/* <Calculator3 /> */}
      {/* ----------------------------- */}
      {/* Tutorial-12 */}
      {/* <Text /> */}
      {/* <Emoji> */}
      {/* {({ addEmoji }) => ( */}
      {/* // <Breaket> */}
      {/* {({ addBreaket }) => ( */}
      {/* // <Text addEmoji={addEmoji} addBreaket={addBreaket} /> */}
      {/* // )} */}
      {/* </Breaket> */}
      {/* // )} */}
      {/* </Emoji> */}

      {/* <Emoji2> */}
      {/* {({ addEmoji2 }) => ( */}
      {/* // <Breaket2> */}
      {/* {({ addBreaket2 }) => ( */}
      {/* // <Text2 addEmoji2={addEmoji2} addBreaket2={addBreaket2} /> */}
      {/* // )} */}
      {/* </Breaket2> */}
      {/* // )} */}
      {/* </Emoji2> */}

      {/* <Emoji3> */}
      {/* {({ addEmoji3 }) => ( */}
      {/* // <Star3> */}
      {/* {({ addStar3 }) => ( */}
      {/* // <Text3 addEmoji3={addEmoji3} addStar3={addStar3} /> */}
      {/* // )} */}
      {/* </Star3> */}
      {/* // )} */}
      {/* </Emoji3> */}
      {/* ----------------------------- */}
      {/* Tutorial-13 */}
      {/* without higher order: */}
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      {/* With higher order component  */}
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}

      {/* <ClickCounter2 /> */}
      {/* <HoverCounter2 /> */}

      {/* Tutorial-14:  */}
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      {/* <User render={(isLoggedIN) => (isLoggedIN ? "Kishor" : "Sumi")} /> */}

      {/* <Counter */}
      {/* // render={(count, handleCount) => ( */}
      {/* // <ClickCounter count={count} handleCount={handleCount} /> */}
      {/* // )} */}
      {/* // /> */}

      {/* <Counter */}
      {/* // render={(count, handleCount) => ( */}
      {/* // <HoverCounter count={count} handleCount={handleCount} /> */}
      {/* // )} */}
      {/* // /> */}
      {/* Another pattern: */}
      {/* <Counter> */}
      {/* {(count, handleCount) => ( */}
      {/* // <HoverCounter count={count} handleCount={handleCount} /> */}
      {/* // )} */}
      {/* </Counter> */}

      {/* <Counter> */}
      {/* {(count, handleCount) => ( */}
      {/* // <ClickCounter count={count} handleCount={handleCount} /> */}
      {/* // )} */}
      {/* </Counter> */}
      {/* Practices: */}
      {/* <Counter2> */}
      {/* {(count, handleCount) => ( */}
      {/* // <ClickCounter2 count={count} handleCount={handleCount} /> */}
      {/* // )} */}
      {/* </Counter2> */}
      {/* <Counter2> */}
      {/* {(count, handleCount) => ( */}
      {/* // <HoverCounter2 count={count} handleCount={handleCount} /> */}
      {/* // )} */}
      {/* </Counter2> */}

      {/* Tutorial-15  */}
    </>
  );
}
