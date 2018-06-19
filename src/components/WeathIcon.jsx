import React from 'react';
import styled from 'styled-components';
import '../openWeatherMap/css/weather-icons.min.css';
import { getWeatherIcon } from '../openWeatherMap';


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
