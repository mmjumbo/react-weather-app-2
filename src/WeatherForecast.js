import React from "react";
import "./WeatherForecast.css" 
import axios from "axios";

export default function WeatherForecast(props) {
function handleResponse(response){
  console.log(response.data)
}

  let apiKey = "oa224383a3fb04434bf1df50f107516t";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
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