import React from 'react';
import styled from 'styled-components';
import { Segment, Header, Statistic, Icon } from 'semantic-ui-react';

import WeatherIcon from './WeathIcon';


const Container = styled.div`
    margin: 6rem;
`;


const Condition = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;

    & > .wi {
        font-size: 3rem;
        margin-right: 1rem;
    }

    & > .ui.header:last-child {
        margin: 0;
    }
`;

const Location = ({
    city,
    country,
    weather: {
        id: weatherId,
        icon,
        main,
        description,
    },
    wind,
    temp,
    humidity,
}) => (
    <Container>
        <Segment>
            <Header>{ city }, { country }</Header>
            <Statistic>
                <Statistic.Value>
                    { temp }
                    <WeatherIcon name="degrees" />
                </Statistic.Value>
            </Statistic>
            <Condition>
                <WeatherIcon id={weatherId} icon={icon} />
                <Header size="large" content={main} subheader={description} />
            </Condition>


            <Statistic.Group size="small">
                <Statistic value={humidity} label="humidity" />
                <Statistic value={wind.speed} label="wind" />
            </Statistic.Group>

        </Segment>


    </Container>
);

export default Location;
