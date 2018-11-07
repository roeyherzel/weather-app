import React from 'react';
import {
    shape,
    instanceOf,
    string,
    number,
} from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';
import media from '../styleUtils/media';


import WeatherIcons from './WeatherIcons';


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: ${media.mobile};
    margin: 4rem;
    padding: 1.2rem;
    border: 1px solid black;
    border-radius: 6px;

    ${media.mobile`
        margin: 0;
    `};
`;

const StyledWeatherIcons = styled(WeatherIcons)`
    position: absolute;
    top: 0;
    right: 100%;
    font-size: 2.6rem;
    vertical-align: top;
    margin-right: 0.5rem;
`;

const TempContainer = styled.div`
    display: inline-block;
    align-items: center;
    margin-right: 1rem;
`;

const Temp = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    line-height: 0.8;
    font-size: 4rem;
`;

const Deg = styled.span`
    position: absolute;
    top: 0;
    left: 100%;
    font-size: 0.3em;
`;

const Description = styled.div`
    font-size: 16px;
    line-height: 1.7;
    text-align: center;
    text-transform: capitalize;
    color: rgba(0,0,0,0.6);
`;


const Current = ({
    data: {
        dt,
        icon,
        city,
        country,
        description,
    },
}) => (
    <Container>
        <Header size="large">
            { city }
            { ', ' }
            { country }
            <Header.Subheader>{ dt.format('dddd LT') }</Header.Subheader>
        </Header>

        <div>
            <TempContainer>
                <Temp>
                    <StyledWeatherIcons name={icon} />
                    <span>53</span>
                    <Deg>&deg;F</Deg>
                </Temp>
                <Description>{ description }</Description>
            </TempContainer>
        </div>
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
