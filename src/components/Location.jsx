import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Segment, Header, Label } from 'semantic-ui-react';

import WeatherIcon from './WeathIcon';


const Container = styled.div`
    width: 375px;
    margin: 1rem;
`;

const HeaderRow = styled.div`
    display: flex;
    //align-items: center;
    justify-content: space-between;
`;

const Description = styled.div`
    text-transform: capitalize;
`;

const Weather = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
`;

const IconCondition = styled(WeatherIcon)`
    font-size: 3rem;
    margin-right: 1rem;
`;

const IconCelsius = styled(WeatherIcon).attrs({
    name: 'celsius',
})`
    align-self: self-start;
    font-size: 2rem;
    margin-left: 4px;
`;

const IconSunrise = styled(WeatherIcon).attrs({
    name: 'sunrise',
})`
    font-size: 2rem;
`;

const IconMoonrise = styled(IconSunrise).attrs({
    name: 'moonrise',
})`
`;

const IconThermometer = styled(IconSunrise).attrs({
    name: 'thermometer',
})`
`;


const IconGroup = styled.div`
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    line-height: 1.4;
`;

const IconGroupLeft = styled.div`
    align-self: flex-end;
    display: flex;
    margin-left: auto;

    & > div {
        margin-left: 1rem;
    }
`;

const TempContainer = styled.div`
    display: flex;
    margin-right: 0.5rem;
`;


const Temp = styled.span`
    line-height: 1;
    font-size: 3rem;
`;

const TempHighLow = styled.div`
    align-self: flex-end;
`;

const TempLow = styled.span`
    color: ${p => p.theme.color.gray};
`;

const TempHigh = styled.span`
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
    sunrise,
    sunset,
    temp,
    temp_max,
    temp_min,
}) => (
    <Container>
        <Segment>
            <HeaderRow>
                <Header as="h3">
                    { city }, { country }
                    <Header.Subheader>
                        <Description>
                            { description }
                        </Description>
                    </Header.Subheader>
                </Header>


                <div>
                    <Header size="big" content={dt.format('hh:mm A')} subheader={dt.format('ddd, MMM Mo')} textAlign="center" />
                </div>

            </HeaderRow>

            <Weather>
                <TempContainer>
                    <IconCondition id={weatherId} icon={icon} />
                    <Temp>{ temp }</Temp>
                    <IconCelsius />
                </TempContainer>


                <IconGroupLeft>
                    <IconGroup>
                        <IconThermometer />
                        <TempHighLow>
                            <TempHigh>{ temp_max }&deg;</TempHigh>&nbsp;<TempLow>{ temp_min }&deg;</TempLow>
                        </TempHighLow>
                    </IconGroup>

                    <IconGroup>
                        <IconSunrise />
                        { sunrise.format('h:mm') }
                    </IconGroup>

                    <IconGroup>
                        <IconMoonrise />
                        { sunset.format('h:mm') }
                    </IconGroup>
                </IconGroupLeft>
            </Weather>
        </Segment>


    </Container>
);

export default Location;
