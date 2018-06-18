import React from 'react';
import '../openWeather/css/weather-icons.min.css';
import { getWeatherIcon } from '../openWeather';


const WeatherIcon = ({
    id, icon, name, size,
}) => {
    const iconPrefix = 'wi wi-';
    const iconName = name || getWeatherIcon(id, icon);
    const style = {
        fontSize: size || '1rem',
    };

    return <i style={style} className={iconPrefix + iconName} />;
};

export default WeatherIcon;
