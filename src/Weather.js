import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temperature,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      realFeel: response.data.main.feels_like,
    });
  }
  function Search() {
    const apiKey = "c00315bc8e5475ad20314024ada12a35";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }
  function handleChangeCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <form
          onSubmit={handleSubmit}
          className="search-weather"
          id="search-form"
        >
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                placeholder="Type a city..."
                autoFocus="on"
                autoComplete="off"
                onChange={handleChangeCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-light w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    Search();
  }
}
