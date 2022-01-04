import React from "react";

export default function Text2({ addEmoji2, addBreaket2 }) {
  let text2 = "I am another JavaScript Language";
  if (addEmoji2) {
    text2 = addEmoji2(text2, "😀");
  }
  if (addBreaket2) {
    text2 = addBreaket2(text2);
  }
  return <div>{text2}</div>;
}
