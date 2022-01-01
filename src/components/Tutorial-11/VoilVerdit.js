import React from "react";

export default function VoilVerdit({ celcius }) {
  if (celcius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>Water would not boil.</p>;
}
