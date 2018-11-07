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
import media, { sizes as mediaSizes } from '../styleUtils/media';


import WeatherIcons from './WeatherIcons';
import CityDropdown from './CityDropdown';


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: ${mediaSizes.mobile}px;
    margin: 4rem;
    padding: 1.2rem;
    border: 1px solid black;
    border-radius: 6px;

    ${media.mobile`
        margin: 0;
    `};
`;

const StyledHeader = styled(Header)`
    && {
        display: flex;
        align-items: center;
    }
`;

const StyledWeatherIcons = styled(WeatherIcons)`
    font-size: 3rem;
    margin-right: 1rem;
`;

const TempContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`;

const Temp = styled.div`
    position: relative;
    display: inline-block;
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
    line-height: 1.7;
    text-align: center;
    text-transform: uppercase;
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
    <div>
        <Container>
            <CityDropdown />
        </Container>
        <Container>
            <StyledHeader size="large">
                <StyledWeatherIcons name={icon} />
                <Header.Content>
                    { city }
                    { ', ' }
                    { country }
                    <Header.Subheader>{ dt.format('dddd LT') }</Header.Subheader>
                </Header.Content>
            </StyledHeader>

            <TempContainer>
                <Temp>
                    <span>53</span>
                    <Deg>&deg;F</Deg>
                </Temp>
                <Description>{ description }</Description>
            </TempContainer>
        </Container>
    </div>
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
