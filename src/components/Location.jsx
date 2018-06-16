import React from 'react';
import styled from 'styled-components';
import { Segment, Header, Statistic } from 'semantic-ui-react';

import WeatherIcon from './WeathIcon';


const Container = styled.div`
    margin: 6rem;
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
            <Statistic.Group size="large">
                <Statistic>
                    <Statistic.Value>
                        { temp }&deg;
                    </Statistic.Value>
                </Statistic>

                <Statistic>
                    <Statistic.Value>
                        <WeatherIcon id={weatherId} icon={icon} />
                    </Statistic.Value>
                    <Statistic.Label>{ main }</Statistic.Label>
                </Statistic>
            </Statistic.Group>

            <Statistic.Group size="small">
                <Statistic value={humidity} label="humidity" />
                <Statistic value={wind.speed} label="wind" />
            </Statistic.Group>
        </Segment>
    </Container>
);

export default Location;
