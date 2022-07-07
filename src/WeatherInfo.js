import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mt-2 mb-1">{props.info.city}</h1>
      <div className="row mb-1">
        <div className="col-9">
          <ul>
            <li>
              <FormattedDate date={props.info.date} />
            </li>
            <li>{props.info.description}</li>
          </ul>
        </div>
        <div className="col-3">
          <div className="icon clearfix">
            <img
              src={props.info.iconUrl}
              alt={props.info.description}
              className="float-left"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <span className="temperature">
              {Math.round(props.info.temperature)}
            </span>
            <span className="unit">°F</span>
          </div>
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
        <div className="stat col-3 mb-2">Air Quality: Good</div>
      </div>
    </div>
  );
}
