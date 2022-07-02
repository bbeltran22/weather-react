import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [weather, Info] = useState("");
  const [city, setCity] = useState("");

  function showInfo(response) {
    return Info(
      <ul className="Data">
        <li> Temperature: {Math.round(response.data.main.temp)}°F</li>
        <li> Description: {response.data.weather[0].description}</li>
        <li> Humidity: {response.data.main.humidity}%</li>
        <li> Wind: {Math.round(response.data.wind.speed)}mph</li>
        <li>
          {" "}
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather.description}
          />
        </li>
      </ul>
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
