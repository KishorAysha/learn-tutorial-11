import React from "react";

export default function VoilVerdit3({ temperature }) {
  if (temperature >= 100) {
    return <p>Thw water would boil.</p>;
  }
  return <p>Water would not boil.</p>;
}
