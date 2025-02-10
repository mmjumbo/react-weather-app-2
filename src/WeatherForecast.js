import React from "react";
import "./WeatherForecast.css" 
export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col text-center">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon-container">
            <img
              className="WeatherForecast-icon"
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt="weather-description"
            />
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}