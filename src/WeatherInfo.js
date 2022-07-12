import React from "react";
import WeatherIcon from "./WeatherIcon";
import Temp from "./Temp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mt-3 mb-1 text-center">{props.info.city}</h1>
      <div className="row mb-1 text-center">
        <div className="temp col ">
          <Temp fahrenheit={props.info.temp} />
        </div>
        <div className="col ">
          <span className="icon">
            <WeatherIcon code={props.info.icon} />
          </span>
        </div>
      </div>
      <div className="row mt-2 mb-2">
        <div className="stat col-3">
          High: {Math.round(props.info.highTemp)}°F
        </div>
        <div className="stat col-3">
          Low: {Math.round(props.info.lowTemp)}°F
        </div>
        <div className="stat col-3">Humidity: {props.info.humidity}%</div>
        <div className="stat col-3 mb-2">Air Quality: ?</div>
      </div>
    </div>
  );
}
