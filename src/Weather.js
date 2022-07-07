import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [data, setData] = useState({ ready: false });
  function handleReposonse(response) {
    setData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      highTemp: response.data.main.temp_max,
      lowTemp: response.data.main.temp_min,
      humidity: response.data.main.humidity,
    });
  }

  if (data.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9 mt-3">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3 mt-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-secondary"
              />{" "}
            </div>
          </div>
        </form>
        <h1 className="mt-2 mb-1">{data.city}</h1>
        <div className="row mb-1">
          <div className="col-9">
            <ul>
              <li>
                <FormattedDate date={data.date} />
              </li>
              <li>{data.description}</li>
            </ul>
          </div>
          <div className="col-3">
            <div className="icon clearfix">
              <img
                src={data.iconUrl}
                alt={data.description}
                className="float-left"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <span className="temperature">
                {Math.round(data.temperature)}
              </span>
              <span className="unit">°F</span>
            </div>
          </div>
        </div>
        <div className="row mt-2 mb-2">
          <div className="stat col-3">High: {Math.round(data.highTemp)}°F</div>
          <div className="stat col-3">Low: {Math.round(data.lowTemp)}°F</div>
          <div className="stat col-3">Humidity: {data.humidity}%</div>
          <div className="stat col-3 mb-2">Air Quality: Good</div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2fc2d2f29940c2aa3c6f40c54ba37b97";
    let city = "New York";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleReposonse);

    return "Loading...";
  }
}
