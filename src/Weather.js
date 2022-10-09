import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Klaipėda",
    date: "Thursday 19:00",
    description: "Cloudy",
    temperatureDay: "27",
    temperatureNight: "20",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    humidity: "80",
    wind: "9",
    realFeel: "15",
  };
  return (
    <div className="WeatherApp">
      <form className="search-weather" id="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              className="form-control w-400"
              placeholder="Type a city..."
              autoFocus="on"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-light w-80"
            />
          </div>
          <div className="col-3">
            <button className="btn btn-light w-80">Current</button>
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul className="date">
        <li>{weatherData.date}</li>
        <li>{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <strong className="degreesDay">
              {weatherData.temperatureDay}{" "}
            </strong>
            <small className="degreesNight">
              {" "}
              {weatherData.temperatureNight}{" "}
            </small>
            <span className="units">
              <a href="/" className="active">
                °C{" "}
              </a>{" "}
              |<a href="/">°F</a>
            </span>
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="Sun-icon fa-fade"
            />
          </div>
        </div>
        <div className="col-6">
          <ul className="Other-properties">
            <li>
              Wind: <span>{weatherData.wind} </span> Km/H
            </li>
            <li>
              Humidity: <span>{weatherData.humidity}</span>%
            </li>
            <li>
              Real feel: <span>{weatherData.realFeel}</span>°C
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
