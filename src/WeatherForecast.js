import React, { useState } from "react";
import "./WeatherForecast.css" 
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response){
  setForecast(response.data.daily);
  setLoaded(true);
  console.log(response.data);
}

  
  
  if (loaded) {
return (
  <div className="WeatherForecast">
    <div className="row">
      <div className="col text-center">
        <WeatherForecastDay data={forecast[0]}/>
      </div>
    </div>
  </div>
);
  } else {
let apiKey = "oa224383a3fb04434bf1df50f107516t";
let longitude = props.coordinates.longitude;
let latitude = props.coordinates.latitude;
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

return <div>Loading...</div>;

  }
  
  
}