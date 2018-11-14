import React from 'react';
import { oneOf } from 'prop-types';
import { getContext } from 'recompose';
import styled from 'styled-components';


const unitType = oneOf(['metric', 'imperial']);

const Container = styled.span`
    align-self: flex-start;
    font-size: 1rem;
`;

const Degree = ({ unit }) => (
    <Container>
        &deg;
        { unit === 'metric' ? 'C' : 'F' }
    </Container>
);

Degree.propTypes = {
    unit: unitType.isRequired,
};

export default getContext({ unit: unitType })(Degree);
