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
import {
    Segment, Label, Icon,
} from 'semantic-ui-react';

import WeatherIcons from '../WeatherIcons';
import Degree from './Degree';


const StyledSegment = styled(Segment)`
    && {
        width: 100%;
        margin-top: 0;
    }
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const LabelsRow = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-top: 4px;
`;

const StyledWeatherIcon = styled(WeatherIcons)`
    font-size: 2.1rem;
    margin-right: 4px;
`;

const TempContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2px;
    line-height: 0.8;
`;

const Temp = styled.span`
    font-size: 3.5rem;
    line-height: 0.8;
`;

const Location = styled.h2`
    font-size: 19px;
    font-weight: 300;
    margin-bottom: 5px;
`;

const Condition = styled.h3`
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba(0,0,0,.87);
    margin: 0;
`;

const Current = ({
    data: {
        dt,
        icon,
        city,
        country,
        main,
        temp,
    },
}) => (
    <StyledSegment>
        <Row>
            <div>
                <Location>
                    { city }
                    ,&nbsp;
                    { country }
                </Location>
                <Condition>
                    { main }
                </Condition>
            </div>

            <TempContainer>
                <StyledWeatherIcon {...icon} />
                <Temp>{ temp }</Temp>
                <Degree />
            </TempContainer>
        </Row>

        <LabelsRow>
            <Label basic size="small">
                <Icon name="clock" color={icon.period === 'day' ? 'orange' : 'black'} />
                { dt.format('HH:mm') }
                <Label.Detail>{ dt.format('z') }</Label.Detail>
            </Label>
        </LabelsRow>
    </StyledSegment>
);

Current.propTypes = {
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

export default Current;
