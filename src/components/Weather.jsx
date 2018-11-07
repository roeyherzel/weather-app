import React from 'react';
import {
    shape,
    instanceOf,
    string,
    number,
} from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import { Header } from 'semantic-ui-react';

import WeatherIcons from './WeatherIcons';


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
    margin: 4rem;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 6px;
`;

const StyledWeatherIcons = styled(WeatherIcons)`
    font-size: 3rem;
    vertical-align: top;
`;

const TempContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
`;

const Temp = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    line-height: 0.8;
    font-size: 4rem;
`;


const Deg = styled.span`
    position: absolute;
    top: 0;
    left: 100%;
    font-size: 0.3em;
`;

const Description = styled.div`
    font-size: 16px;
    text-align: center;
    text-transform: capitalize;
    color: rgba(0,0,0,0.6);
    margin-top: 4px;
`;

const Weather = ({
    data: {
        dt,
        icon,
        city,
        country,
        description,
    },
}) => (
    <Container>
        <Header size="large">
            { city }
            { ', ' }
            { country }
            <Header.Subheader>{ dt.format('dddd LT') }</Header.Subheader>
        </Header>

        <div>
            <StyledWeatherIcons name={icon} />
            <TempContainer>
                <Temp>
                    <span>53</span>
                    <Deg>&deg;F</Deg>
                </Temp>
                <Description>{ description }</Description>
            </TempContainer>
        </div>
    </Container>
);

Weather.propTypes = {
    data: shape({
        dt: instanceOf(moment).isRequired,
        city: string.isRequired,
        country: string.isRequired,
        weather: shape({
            id: number.isRequired,
            description: string.isRequired,
        }),
    }),
};

export default Weather;
