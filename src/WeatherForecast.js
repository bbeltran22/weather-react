import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(reponse) {
    console.log(response.data);
  }
  if (loaded) {
    let apiKey = "2fc2d2f29940c2aa3c6f40c54ba37b97";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  } else {
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
}
