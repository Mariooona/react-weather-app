import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Sunday 21:00",
      description: response.data.weather[0].description,
      temperatureDay: response.data.main.temp_max,
      temperatureNight: response.data.main.temp_min,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      realFeel: response.data.main.feels_like,
    });
  }
  if (weatherData.ready) {
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
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <strong className="degreesDay">
                {Math.round(weatherData.temperatureDay)}{" "}
              </strong>
              <small className="degreesNight">
                {" "}
                {Math.round(weatherData.temperatureNight)}{" "}
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
                Wind: <span>{Math.round(weatherData.wind)} </span> Km/H
              </li>
              <li>
                Humidity: <span>{weatherData.humidity}</span>%
              </li>
              <li>
                Real feel: <span>{Math.round(weatherData.realFeel)}</span>°C
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "c00315bc8e5475ad20314024ada12a35";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
