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
    margin-top: 2px;
`;

const Icon = styled(WeatherIcons)`
    font-size: 2.5rem;
    margin-right: 5px;
`;

const TempContainer = styled.div`
    position: relative;
    display: flex;
    margin-right: 1rem;
`;

const Temp = styled.span`
    font-size: 4rem;
    line-height: 0.8;
`;

const Deg = styled.span`
    position: absolute;
    top: 0;
    left: 100%;
    font-size: 1rem;
`;

const Location = styled.h2`
    font-size: 21px;
    font-weight: 300;
    color: ${p => p.theme.color.grey};
    margin-bottom: 5px;
`;

const Condition = styled(Header)`
    && {
        margin-top: 0;
        margin-bottom: 2px;
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
        <Row>
            <div>
                <Location>
                    { city }
                    ,&nbsp;
                    { country }
                </Location>
                <Condition sub color="grey">
                    { main }
                </Condition>
            </div>

            <TempContainer>
                <Icon name={icon} />
                <Temp>53</Temp>
                <Deg>&deg;F</Deg>
            </TempContainer>
        </Row>

        <LabelsRow>
            <Label
                size="small"
                icon="clock"
                content={dt.format('HH:mm')}
                detail={dt.format('z')}
            />
        </LabelsRow>
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
