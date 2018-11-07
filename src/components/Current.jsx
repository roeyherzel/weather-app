import React from 'react';
import {
    shape,
    instanceOf,
    string,
    number,
} from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import { Header, Segment, Label } from 'semantic-ui-react';
import WeatherIcons from './WeatherIcons';


const Container = styled(Segment)`
    && {
        display: flex;
        justify-content: space-between;
    }
`;

const StyledHeader = styled(Header)`
    && {
        display: flex;
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
    line-height: 2;
    text-transform: uppercase;
    text-align: center;
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
            <StyledHeader size="large">
                <Header.Content>
                    { city }
                    { ', ' }
                    { country }
                    { /* <Header.Subheader>{ dt.format('ddd LT') }</Header.Subheader> */ }
                </Header.Content>
            </StyledHeader>

            <Label
                icon="clock"
                color="black"
                content={dt.format('h:mm a')}
                detail={dt.format('ddd')}
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
