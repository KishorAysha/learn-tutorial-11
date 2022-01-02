import React from "react";

export default function Text2({ addEmoji, addBreaket }) {
  let text = "I am another JavaScript Language";
  if (addEmoji) {
    text = addEmoji(text, "😀");
  }
  if (addBreaket) {
    text = addBreaket(text);
  }
  return <div>{text}</div>;
}
