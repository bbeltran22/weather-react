import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9 mt-3">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-secondary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 2:02</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          90°F
        </div>
      </div>
      <div className="row mt-2 mb-2">
        <div className="col-3">High: 92°F</div>
        <div className="col-3">Low: 87°F</div>
        <div className="col-3">Humidity: 20%</div>
        <div className="col-3 mb-2">Air Quality: Good</div>
      </div>
    </div>
  );
}
