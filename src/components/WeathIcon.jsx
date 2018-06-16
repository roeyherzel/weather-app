import React from 'react';
import '../openWeather/css/weather-icons.min.css';
import { getWeatherIcon } from '../openWeather';


const WeatherIcon = ({ id, icon, name }) => (name
    ? <i className={`wi wi-${name}`} />
    : <i className={`wi wi-${getWeatherIcon(id, icon)}`} />);


export default WeatherIcon;
