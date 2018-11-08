import React from 'react';
import {
    shape,
    instanceOf,
    string,
    number,
} from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import { Header, Label } from 'semantic-ui-react';
import WeatherIcons from './WeatherIcons';


const Container = styled.div`
    && {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const StyledWeatherIcons = styled(WeatherIcons)`
    font-size: 2.5rem;
    margin-right: 5px;
`;

const TempContainer = styled.div`
    display: flex;
`;

const Temp = styled.div`
    position: relative;
    font-size: 4rem;
    line-height: 0.8;
    margin-right: 1rem;
`;

const Deg = styled.span`
    position: absolute;
    top: 0;
    left: 100%;
    font-size: 0.3em;
`;

const Description = styled.div`
    font-size: 1rem;
    text-transform: uppercase;
    text-align: center;
    margin-top: 0.7rem;
`;

const StyledHeader = styled(Header)`
    && {
        margin-bottom: 5px;
    }
`;

const StyledLabel = styled(Label)`
    && {
        margin-left: 0;
    }
`;

const Current = ({
    data: {
        dt,
        icon,
        city,
        country,
        main,
    },
}) => (
    <Container>
        <div>
            <StyledHeader
                content={`${city}, ${country}`}
            />
            <StyledLabel
                icon="clock"
                content={dt.format('h:mm a')}
                detail={dt.format('z')}
            />
        </div>

        <TempContainer>
            <StyledWeatherIcons name={icon} />

            <Temp>
                <span>53</span>
                <Description>{ main }</Description>
                <Deg>&deg;F</Deg>
            </Temp>
        </TempContainer>
    </Container>
);

Current.propTypes = {
    data: shape({
        dt: instanceOf(moment).isRequired,
        city: string.isRequired,
        country: string.isRequired,
        weather: shape({
            id: number.isRequired,
            description: string.isRequired,
        }),
    }),
};

export default Current;
