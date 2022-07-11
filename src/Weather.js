import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [data, setData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleReposonse(response) {
    setData({
      ready: true,
      city: response.data.name,
      temp: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      highTemp: response.data.main.temp_max,
      lowTemp: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "2fc2d2f29940c2aa3c6f40c54ba37b97";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleReposonse);
  }

  if (data.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-5 mt-3 ">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col  mt-4">
              <button className="submit ms-3">
                <i className="search fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo info={data} />
        <hr></hr>
        <WeatherForecast coordinates={data.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
