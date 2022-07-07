import React, { useState } from "react";

export default function Conversion(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function convertCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celcius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <span className="Conversion">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={convertCelcius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="Conversion">
        <span className="temperature">{Math.round(celcius())}</span>
        <span className="unit">
          <a href="/" onClick={convertFahrenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </span>
    );
  }
}
