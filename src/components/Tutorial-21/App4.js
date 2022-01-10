import React, { useCallback, useMemo, useState } from "react";
import Form from "../Tutorial-22/Form";
import Time from "../Tutorial-22/Time";
import GetPost from "../Tutorial-23/GetPost";
import GetPost2 from "../Tutorial-23/GetPost2";
import LayoutComponent from "../Tutorial-24/LayoutComponent";
import LayoutComponent2 from "../Tutorial-24/LayoutComponent2";
// import ComplexCounter from "../Tutorial-23/ComplexCount";
// import Counter from "../Tutorial-23/Counter";
// import Counter3 from "../Tutorial-23/Counter3";
import Button from "./Button";
import ShowCount from "./ShowCount";
import Title from "./Title";

export default function App4() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCount1 = useCallback(() => {
    setCount1((prevState) => prevState + 1);
  }, []);

  const handleCount2 = useCallback(() => {
    setCount2((prevState) => prevState + 5);
  }, []);

  const isEvenOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return count1 % 2 === 0;
  }, [count1]);

  console.log("App is rendered...");
  return (
    <div>
      <Title />
      <ShowCount count={count1}>Count-1</ShowCount>
      {isEvenOdd ? "Even" : "Odd"}
      <Button handleCount={handleCount1}>Button 1</Button>
      <hr />
      <ShowCount count={count2}>Count-2</ShowCount>
      <Button handleCount={handleCount2}>Button 2</Button>
      <hr />
      <Form />
      <hr />
      <Time />
      <hr />
      {/* <Counter /> */}
      <hr />
      {/* <ComplexCounter /> */}
      {/* <Counter3 /> */}

      <GetPost />
      <hr />
      <GetPost2 />
      <hr />
      <LayoutComponent />
      <LayoutComponent2 />
    </div>
  );
}
