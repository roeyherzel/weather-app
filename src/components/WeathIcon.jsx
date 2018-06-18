import React from 'react';
import styled from 'styled-components';
import '../openWeather/css/weather-icons.min.css';
import { getWeatherIcon } from '../openWeather';


const Icon = styled.i`
`;

const WeatherIcon = ({
    id, icon, name, className,
}) => {
    const iconPrefix = `${className} wi wi-`;
    const iconName = name || getWeatherIcon(id, icon);

    return <Icon className={iconPrefix + iconName} />;
};

export default WeatherIcon;
