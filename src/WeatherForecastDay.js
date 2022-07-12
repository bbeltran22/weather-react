import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }
  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day mt-2">{day()}</div>
      <span className="Forecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </span>

      <div className="mb-2">
        <span className="Forecast-min">{minTemp()}</span>
        <span className="Forecast-max">{maxTemp()}</span>
      </div>
    </div>
  );
}
