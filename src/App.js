import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App container mt-2">
      <Weather defaultCity="New York" />
    </div>
  );
}
