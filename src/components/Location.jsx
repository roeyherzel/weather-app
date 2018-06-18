import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Segment, Header, Label } from 'semantic-ui-react';

import WeatherIcon from './WeathIcon';


const Container = styled.div`
    width: 400px;
    margin: 6rem;
`;

const HeaderRow = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const Description = styled.div`
    text-transform: capitalize;
`;

const Weather = styled.div`
    display: flex;
    align-items: center;
`;

const IconCondition = styled(WeatherIcon)`
    font-size: 3.5rem;
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

const IconGroup = styled.div`
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    line-height: 1.2;
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

const TempLow = styled.span`
    color: ${p => p.theme.color.gray};
`;

const TempHeigh = styled.span`
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

                <TempContainer>
                    <Temp>{ temp }</Temp>
                    <IconCelsius />
                </TempContainer>

            </HeaderRow>
            <Weather>
                <Label size="big" basic>{ moment(dt).format('hh:mm A') }</Label>

                <IconGroupLeft>
                    <IconGroup>
                        <IconSunrise />
                        { moment(sunrise).format('h:mm') }
                    </IconGroup>

                    <IconGroup>
                        <IconMoonrise />
                        { moment(sunset).format('h:mm') }
                    </IconGroup>
                    <IconGroup>
                        <IconCondition id={weatherId} icon={icon} />
                        <div>
                            <TempHeigh>{ temp_max }&deg;</TempHeigh>&nbsp;<TempLow>{ temp_min }&deg;</TempLow>
                        </div>
                    </IconGroup>
                </IconGroupLeft>
            </Weather>
        </Segment>


    </Container>
);

export default Location;
