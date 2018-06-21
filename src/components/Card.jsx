import React from 'react';
import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';

import CardHead from './CardHead';
import CardBody from './CardBody';


const Container = styled.div`
    width: 375px;
    margin: 1rem;
`;


const Card = props => (
    <Container>
        <Segment.Group>
            <CardHead {...props} />
            <CardBody {...props} />
        </Segment.Group>
    </Container>
);

export default Card;
