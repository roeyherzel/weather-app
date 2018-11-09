import React from 'react';
import {
    shape,
    instanceOf,
    string,
    number,
} from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import { Segment, Header, Label } from 'semantic-ui-react';
import WeatherIcons from './WeatherIcons';


const StyledSegment = styled(Segment)`
    && {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 0;
    }
`;

const StyledWeatherIcons = styled(WeatherIcons)`
    font-size: 2.5rem;
    margin-right: 10px;
`;

const WeatherContainer = styled.div`
    display: flex;
`;

const Temp = styled.span`
`;

const Deg = styled.span`
    position: absolute;
    top: 0;
    left: 100%;
    font-size: 1rem;
    color: ${p => p.theme.color.grey};
`;

const TempContainer = styled.div`
    position: relative;
    font-size: 4rem;
    line-height: 0.8;
    margin-right: 1rem;
`;

const StyledHeader = styled(Header)`
    && {
        margin-left: 5px;
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
    <StyledSegment>
        <div>
            <StyledHeader content={`${city}, ${country}`} />
            <div>
                <Label
                    icon="clock"
                    content={dt.format('h:mm a')}
                    detail={dt.format('z')}
                />

                <Label content={main} />
            </div>
        </div>

        <WeatherContainer>
            <StyledWeatherIcons name={icon} />

            <TempContainer>
                <Temp>53</Temp>
                <Deg>&deg;F</Deg>
            </TempContainer>
        </WeatherContainer>
    </StyledSegment>
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
