import React from 'react';
import { oneOf } from 'prop-types';
import { getContext } from 'recompose';
import styled from 'styled-components';


const unitType = oneOf(['metric', 'imperial']);

const Container = styled.span`
    align-self: flex-start;
    font-size: 12px;
`;

const Degree = ({ units }) => (
    <Container>
        &deg;
        { units === 'metric' ? 'C' : 'F' }
    </Container>
);

Degree.propTypes = {
    units: unitType.isRequired,
};

export default getContext({ units: unitType })(Degree);
