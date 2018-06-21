import React from 'react';
import moment from 'moment';
import { string, number, instanceOf, shape } from 'prop-types';
import styled from 'styled-components';
import { Segment, Header } from 'semantic-ui-react';

import WeatherIcon from './WeathIcon';


const propTypes = {
    dt: instanceOf(moment).isRequired,
    city: string.isRequired,
    country: string.isRequired,
    weather: shape({
        id: number.isRequired,
        icon: string.isRequired,
        description: string.isRequired,
    }),
    sunrise: instanceOf(moment).isRequired,
    sunset: instanceOf(moment).isRequired,
    temp: number.isRequired,
    temp_max: number.isRequired,
    temp_min: number.isRequired,
};


const HeaderRow = styled.div`
    display: flex;
    justify-content: space-between;

    & > .header {
        margin-top: 0;
    }
`;

const Description = styled.div`
    text-transform: capitalize;
`;

const Weather = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
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
    font-size: 1.5rem;
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

const CardHead = ({
    dt,
    city,
    country,
    weather: {
        id: weatherId,
        icon,
        description,
    },
    sunrise,
    sunset,
    temp,
    temp_max,
    temp_min,
}) => (
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

            <Header
                as="h3"
                content={dt.format('h:mm A')}
                subheader={dt.format('ddd, MMM Mo')}
                textAlign="center"
            />
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
);

CardHead.propTypes = propTypes;

export default CardHead;
