import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function weatherInfo(props) {
  console.log(props.data);
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="date">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <WeatherTemperature celcius={props.data.temperature} />
            <strong className="degreesDay">
              {Math.round(props.data.temperatureDay)}{" "}
            </strong>
            <small className="degreesNight">
              {" "}
              {Math.round(props.data.temperatureNight)}{" "}
            </small>
            <span className="units">
              <a href="/" className="active">
                °C{" "}
              </a>{" "}
              |<a href="/">°F</a>
            </span>{" "}
            <WeatherIcon code={props.data.icon} />
          </div>
        </div>
        <div className="col-6">
          <ul className="Other-properties">
            <li>
              Wind: <span>{Math.round(props.data.wind)} </span> Km/H
            </li>
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
            <li>
              Real feel: <span>{Math.round(props.data.realFeel)}</span>°C
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
