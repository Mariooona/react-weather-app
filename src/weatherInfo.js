import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 classname="cityName">{props.data.city}</h1>
      <ul className="date">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <div className="float-left">
              <WeatherTemperature celcius={props.data.temperature} />
            </div>
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={60} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="float-right" id="Other-properties">
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
