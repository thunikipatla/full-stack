import axios from "axios";

const API_KEY = "3bffa7447fc12cae8b3ddd1ec9af2d05";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},pt`;
  const request = axios.get(url); //redux-promise middleware allow to write clean code

  return {
    type: "FETCH_WEATHER",
    payload: request
  };
}
