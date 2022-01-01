import React from "react";

export default function VoilVerdit2({ temperature }) {
  if (temperature >= 100) {
    return <p>The water is boil.</p>;
  }
  return <p>Water would not boil.</p>;
}
