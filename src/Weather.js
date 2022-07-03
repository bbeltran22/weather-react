import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Search() {
  const [weather, Info] = useState("");
  const [city, setCity] = useState("");

  function showInfo(response) {
    return Info(
      <div className="Data">
        <h1>{city}</h1>
        <img
          src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
          alt={response.data.weather.description}
        />

        <div className="description">
          {response.data.weather[0].description}
        </div>

        <h3>
          <strong className="Temperature">
            {Math.round(response.data.main.temp)}°F
          </strong>
        </h3>
        <br />
        <div className="row">
          <div className="col-3">
            HIGH: {Math.round(response.data.main.temp_max)}°F{" "}
          </div>
          <div className="col-3">
            LOW: {Math.round(response.data.main.temp_min)}°F
          </div>
          <div className="col-3">
            FEELS LIKE: {Math.round(response.data.main.feels_like)}°F
          </div>
          <div className="col-3">HUMIDITY: {response.data.main.humidity}%</div>
        </div>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2fc2d2f29940c2aa3c6f40c54ba37b97";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}
&units=${units}`;

    axios.get(apiUrl).then(showInfo);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter City" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <div className="dataWeather">{weather}</div>
    </div>
  );
}
