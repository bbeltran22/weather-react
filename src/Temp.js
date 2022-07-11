import React from "react";

export default function Temp(props) {
  return (
    <span className="Temp">
      <span className="temp">{Math.round(props.fahrenheit)}</span>
      <span className="unit">°F</span>
    </span>
  );
}
