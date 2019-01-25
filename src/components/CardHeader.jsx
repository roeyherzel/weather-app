import React from 'react';
import {
    shape,
    instanceOf,
    string,
    number,
    oneOf,
} from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import { lighten } from 'polished';
import {
    Segment, Label, Header, Flag,
} from 'semantic-ui-react';

import WeatherIcons from '../WeatherIcons';
import Degree from './Degree';


const StyledSegment = styled(Segment)`
    && {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        width: 100%;
        margin-top: 0;
    }
`;

const StyledWeatherIcon = styled(WeatherIcons)`
    font-size: 2rem;
    margin-top: 2px;
`;

const TempContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 2px;
`;

const Temp = styled.span`
    font-size: 3.5rem;
    font-weight: 100;
    line-height: 1;
    letter-spacing: -4px;
    margin: 0 4px;
`;

const Description = styled.span`
    text-transform: capitalize;
`;

const Time = styled(Label)`
    && {
        margin-top: 10px;
    }
`;

const RightCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const CardHeader = ({
    data: {
        dt,
        icon,
        city,
        country,
        description,
        temp,
    },
}) => (
    <StyledSegment>
        <div>
            <Header>
                { city },&nbsp;{ country }
                <Header.Subheader>
                    <Description>{ description }</Description>
                </Header.Subheader>
            </Header>

        </div>

        <RightCol>
            <TempContainer>
                <StyledWeatherIcon {...icon} />
                <Temp>{ temp }</Temp>
                <Degree />
            </TempContainer>
            <Time
                size="small"
                color="grey"
                content={dt.format('h:mm a')}
                detail={dt.format('ddd')}
            />
        </RightCol>
    </StyledSegment>
);

CardHeader.propTypes = {
    data: shape({
        dt: instanceOf(moment).isRequired,
        city: string.isRequired,
        country: string.isRequired,
        icon: shape({
            id: number.isRequired,
            period: oneOf(['day', 'night', null]),
        }),
        main: string.isRequired,
        temp: number.isRequired,
    }).isRequired,
};

export default CardHeader;
