import React from 'react';
import styled from 'styled-components';
import { Segment, Header } from 'semantic-ui-react';
import { WindIcon } from './WeathIcon';


const CardBody = ({
    humidity,
    wind,
}) => (
    <Segment>
        <div>
            <span>Humidity: </span><span>{ humidity }%</span>
        </div>
        <div>
            <span>Wind: </span><span>{ wind.speed } <WindIcon deg={wind.deg} /></span>
        </div>
    </Segment>
);

export default CardBody;
