import React from 'react';
import moment from 'moment';
import { string, number, instanceOf } from 'prop-types';
import styled from 'styled-components';
import { Segment, Header, Label } from 'semantic-ui-react';

import WeatherIcon from './WeathIcon';


const propTypes = {
    dt: instanceOf(moment).isRequired,
    city: string.isRequired,
    country: string.isRequired,
    weather: string.isRequired,
    icon: string.isRequired,
    temp: number.isRequired,
    temp_max: number.isRequired,
    temp_min: number.isRequired,
};


const HeaderRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    & .header {
        margin-top: 0;
    }
`;

const Description = styled.div`
    text-transform: capitalize;
`;

const Weather = styled.div`
    display: flex;
    align-items: center;
`;

const IconCondition = styled(WeatherIcon)`
    font-size: 3rem;
    margin-right: 1rem;
`;

const IconCelsius = styled(WeatherIcon).attrs({
    name: 'celsius',
})`
    align-self: flex-start;
    font-size: 2rem;
    margin-left: 2px;
`;

const TempContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Temp = styled.span`
    ${''}
    display: flex;
    align-items: baseline;
    line-height: 1;
    font-size: 3rem;
`;

const TempHighLow = styled.div`
    text-align: center;
`;

const TempLow = styled.span`
    color: ${p => p.theme.color.gray};
`;

const TempHigh = styled.span`
    padding-right: 5px;
`;

const CardHead = ({
    dt,
    city,
    country,
    weather,
    icon,
    temp,
    temp_max,
    temp_min,
}) => (
    <Segment>
        <HeaderRow>
            <div>
                <Header as="h3">
                    { city }, { country }
                    <Header.Subheader>
                        <Description>
                            { weather }
                        </Description>
                    </Header.Subheader>
                </Header>

                <Label
                    size="large"
                    content={dt.format('h:mm A')}
                    detail={dt.format('ddd')}
                />
            </div>

            <Weather>
                <IconCondition name={icon} />
                <TempContainer>
                    <Temp>{ temp }</Temp>
                    <TempHighLow>
                        <TempHigh>{ temp_max }&deg;</TempHigh><TempLow>{ temp_min }&deg;</TempLow>
                    </TempHighLow>
                </TempContainer>
                <IconCelsius />
            </Weather>
        </HeaderRow>


    </Segment>
);

CardHead.propTypes = propTypes;

export default CardHead;
