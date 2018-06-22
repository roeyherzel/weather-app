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
    clouds: number.isRequired,
};


const Icon = styled(WeatherIcon).attrs({
})`
    font-size: 1.5rem;
`;


const IconGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    line-height: 1.4;
`;

const IconsContainer = styled.div`
    display: flex;
    justify-content: space-around;

    & > div {
        margin: 0 0.5rem;
    }
`;

const CardBody = ({
    sunrise,
    sunset,
    humidity,
    clouds,
}) => (
    <Segment>
        <IconsContainer>
            <IconGroup>
                <Icon name="sunrise" />
                { sunrise.format('h:mm') }
            </IconGroup>

            <IconGroup>
                <Icon name="moonrise" />
                { sunset.format('H:mm') }
            </IconGroup>

            <IconGroup>
                <Icon name="humidity" />
                { humidity }%
            </IconGroup>

            <IconGroup>
                <Icon name="cloud" />
                { clouds }%
            </IconGroup>
        </IconsContainer>
    </Segment>
);

CardBody.propTypes = propTypes;

export default CardBody;
