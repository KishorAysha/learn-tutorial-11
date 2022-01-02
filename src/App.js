import React from "react";
import Breaket from "./components/Tutorial-12/composition/Breaket";
import Breaket2 from "./components/Tutorial-12/composition/Breaket2";
import Emoji from "./components/Tutorial-12/composition/Emoji";
import Emoji2 from "./components/Tutorial-12/composition/Emoji2";
import Emoji3 from "./components/Tutorial-12/composition/Emoji3";
import Star3 from "./components/Tutorial-12/composition/Star3";
// Tutorial-11:
// import Calculator from "./components/Calculator";
// import Calculator2 from "./components/Calculator2";
//  import Calculator3 from "./components/Tutorial-11/Calculator3";
// -----------------------------------------------------------------//
// Tutorial-12:
// inheritance:
// import Text from "./components/Tutorial-12/inheritance/Text";
//Composition:
import Text from "./components/Tutorial-12/composition/Text";
import Text2 from "./components/Tutorial-12/composition/Text2";
import Text3 from "./components/Tutorial-12/composition/Text3";

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
      <Emoji>
        {({ addEmoji }) => (
          <Breaket>
            {({ addBreaket }) => (
              <Text addEmoji={addEmoji} addBreaket={addBreaket} />
            )}
          </Breaket>
        )}
      </Emoji>

      <Emoji2>
        {({ addEmoji }) => (
          <Breaket2>
            {({ addBreaket }) => (
              <Text2 addEmoji={addEmoji} addBreaket={addBreaket} />
            )}
          </Breaket2>
        )}
      </Emoji2>

      <Emoji3>
        {({ addEmoji3 }) => (
          <Star3>
            {({ addStar3 }) => (
              <Text3 addEmoji3={addEmoji3} addStar3={addStar3} />
            )}
          </Star3>
        )}
      </Emoji3>
    </>
  );
}
