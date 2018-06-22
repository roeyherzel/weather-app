import React from 'react';
import { number, string, instanceOf } from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';

import WeatherIcon from './WeathIcon';


const propTypes = {
    sunrise: instanceOf(moment).isRequired,
    sunset: instanceOf(moment).isRequired,
    humidity: number.isRequired,
};


const IconSunrise = styled(WeatherIcon).attrs({
    name: 'sunrise',
})`
    font-size: 1.5rem;
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

const CardBody = ({
    sunrise,
    sunset,
    humidity,
}) => (
    <Segment>
        <IconGroupLeft>
            <IconGroup>
                <IconSunrise />
                { sunrise.format('h:mm') }
            </IconGroup>

            <IconGroup>
                <IconMoonrise />
                { sunset.format('h:mm') }
            </IconGroup>
        </IconGroupLeft>
        <div>
            <span>Humidity: { humidity }%</span>
        </div>
    </Segment>
);

CardBody.propTypes = propTypes;

export default CardBody;
