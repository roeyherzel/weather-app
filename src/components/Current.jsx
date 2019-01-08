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
import { Segment } from 'semantic-ui-react';

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

const StyledWeatherIcon = styled(WeatherIcons)`
    font-size: 2rem;
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

const Title = styled.h2`
    font-size: 20px;
    margin-bottom: 2px;
`;

const SubTitle = styled.div`
    font-weight: 400;
    color: ${p => p.theme.color.grey};
`;

const Description = styled.span`
    text-transform: capitalize;
`;

const Current = ({
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
        <Row>
            <div>
                <Title>
                    { city },&nbsp;{ country }
                </Title>
                <SubTitle>
                    { dt.format('ddd H:mm a') } | <Description>{ description }</Description>
                </SubTitle>
            </div>

            <TempContainer>
                <StyledWeatherIcon {...icon} />
                <Temp>{ temp }</Temp>
                <Degree />
            </TempContainer>
        </Row>
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
