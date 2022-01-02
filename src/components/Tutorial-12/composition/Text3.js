import React from "react";

export default function Text3({ addEmoji3, addStar3 }) {
  let text3 = "I am the javascript programmer";
  if (addEmoji3) {
    text3 = addEmoji3(text3, "😁");
  }
  if (addStar3) {
    text3 = addStar3(text3);
  }
  return <div>{text3}</div>;
}
