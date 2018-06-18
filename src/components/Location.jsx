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
    margin-top: 0.5rem;
`;

const IconCondition = styled(WeatherIcon)`
    font-size: 3rem;
`;

const IconCelsius = styled(WeatherIcon).attrs({
    name: 'celsius',
})`
    align-self: self-start;
    font-size: 2rem;
    margin-left: 4px;
`;

const TempContainer = styled.div`
    display: flex;
    margin-right: 1rem;
`;

const TempGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    line-height: 1.2;
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
    wind,
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

                <Label size="big" basic>{ moment(dt).format('ddd hh:mm A') }</Label>
            </HeaderRow>
            <Weather>
                <TempContainer>
                    <Temp>{ temp }</Temp>
                    <IconCelsius />
                </TempContainer>
                <TempGroup>
                    <IconCondition id={weatherId} icon={icon} />
                    <div>
                        <TempHeigh>{ temp_max }&deg;</TempHeigh>&nbsp;<TempLow>{ temp_min }&deg;</TempLow>
                    </div>
                </TempGroup>
            </Weather>
        </Segment>


    </Container>
);

export default Location;
