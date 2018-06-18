import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Segment, Header, Statistic, Label } from 'semantic-ui-react';

import WeatherIcon from './WeathIcon';


const Container = styled.div`
    width: 400px;
    margin: 6rem;
`;

const TitleRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Description = styled.div`
    text-transform: capitalize;
`;

const Weather = styled.div`
    display: flex;
`;

const TempContainer = styled.div`
    display: flex;
    font-size: 3rem;
    margin-left: 0.5rem;
`;

const Temp = styled.span`
    line-height: 1;
`;


const Location = ({
    dt,
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
            <Label color="teal" attached="top">{ moment(dt).format('dddd h:mm a') }</Label>
            <TitleRow>
                <Header as="h2">
                    { city }, { country }
                    <Header.Subheader>
                        <Description>
                            { description }
                        </Description>
                    </Header.Subheader>
                </Header>

                <div>
                    <Weather>
                        <WeatherIcon id={weatherId} icon={icon} size="3rem" />
                        <TempContainer>
                            <Temp>{ temp }</Temp>
                            <WeatherIcon name="celsius" size="2rem" />
                        </TempContainer>
                    </Weather>
                </div>
            </TitleRow>

        </Segment>


    </Container>
);

export default Location;
