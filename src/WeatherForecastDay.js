import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="Forecast-day">{props.data.dt}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <span className="Forecast-min">{props.data.temp.min}°</span>
      <span className="Forecast-max">{props.data.temp.max}°</span>
    </div>
  );
}
