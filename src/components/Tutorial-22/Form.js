import React, { useEffect, useRef } from "react";
import Input from "./Input";

export default function Form() {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
    inputRef2.current.focus();
  });
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter your name" />
      <hr />
      <Input ref={inputRef2} type="text" placeholder="Enter your name" />
    </div>
  );
}
