import React from 'react';
import styled from 'styled-components';

import '../weather-icons/css/weather-icons.min.css';
import '../weather-icons/css/weather-icons-wind.min.css';


const Icon = styled.i`
`;

const WeatherIcon = ({ name, className }) => <Icon className={`${className} wi wi-${name}`} />;

export const WindIcon = ({ deg }) => <WeatherIcon name={`wind towards-${deg}-deg`} />;

export default WeatherIcon;
