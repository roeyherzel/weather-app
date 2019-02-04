import React from 'react';
import {
    instanceOf,
    string,
    number,
    bool,
} from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import {
    Segment, Label, Header, Icon,
} from 'semantic-ui-react';

import WeatherIcons from '../WeatherIcons';
import Degree from './Degree';


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
`;

const StyledSegment = styled(Segment)`
    width: 100%;
    margin-top: 0;
`;

const Temp = styled.div`
    font-size: 3.5rem;
    letter-spacing: -2px;
    line-height: 1;
`;

const StyledWeatherIcon = styled(WeatherIcons)`
    font-size: 2em;
    margin-top: 6px;
    margin-right: 4px;
`;

const Description = styled.span`
    text-transform: capitalize;
`;

const LabelContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
`;

const WeatherContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
    margin-top: -5px;
`;

const Card = ({
    dt,
    isDayTime,
    iconID,
    city,
    country,
    description,
    temp,
}) => (
    <StyledSegment padded>
        <Container>
            <div>
                <Header>
                    { city },&nbsp;{ country }
                    <Header.Subheader>
                        <Description>{ description }</Description>
                    </Header.Subheader>
                </Header>
            </div>

            <WeatherContainer>
                <StyledWeatherIcon id={iconID} isDayTime={isDayTime} />
                <Temp>
                    <Degree>{ temp }</Degree>
                </Temp>
            </WeatherContainer>
        </Container>

        <LabelContainer>
            <Label attached="bottom left">
                <Icon name="clock" color={isDayTime ? 'pink' : 'black'} />
                { dt.format('h:mm a') }
                <Label.Detail>{ dt.format('ddd') }</Label.Detail>
            </Label>
        </LabelContainer>
    </StyledSegment>
);

Card.propTypes = {
    dt: instanceOf(moment).isRequired,
    isDayTime: bool.isRequired,
    city: string.isRequired,
    country: string.isRequired,
    description: string.isRequired,
    iconID: number.isRequired,
    temp: number.isRequired,
};

export default Card;
