import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2 mb-2">
          <div className="Forecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <span className="Forecast-min">75°</span>
          <span className="Forecast-max">95°</span>
        </div>
      </div>
    </div>
  );
}
