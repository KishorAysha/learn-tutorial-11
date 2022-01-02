import React from "react";

export default function Text({ addEmoji, addBreaket }) {
  let text = "I am Javascript programming language";
  if (addBreaket) {
    text = addBreaket(text);
  }
  if (addEmoji) {
    text = addEmoji(text, "😍");
  }
  return <div>{text}</div>;
}
