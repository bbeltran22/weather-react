import React from "react";
export default function Temp(props) {
  return (
    <span className="Temp">
      <span className="temperature">{Math.round(props.fahrenheit)}</span>
      <span className="unit">°F </span>
    </span>
  );
}
