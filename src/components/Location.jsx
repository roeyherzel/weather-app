import React from 'react';
import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';

import CardHead from './CardHead';


const Container = styled.div`
    width: 375px;
    margin: 1rem;
`;


const Location = props => (
    <Container>
        <Segment.Group>
            <CardHead {...props} />
        </Segment.Group>
    </Container>
);

export default Location;
