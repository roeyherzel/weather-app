import React from 'react';
import { oneOf } from 'prop-types';
import { getContext } from 'recompose';
import styled from 'styled-components';


const unitType = oneOf(['metric', 'imperial']);

const DegContainer = styled.span`
    font-size: 0.25em;
    line-height: 1em;
    margin-top: 0.5em;
`;

const Wrapper = styled.span`
    display: flex;
    align-items: flex-start;
`;

const Degree = ({ children, units }) => (
    <Wrapper>
        <span>{ children }</span>
        <DegContainer>
            &deg;{ units === 'metric' ? 'C' : 'F' }
        </DegContainer>
    </Wrapper>
);

Degree.propTypes = {
    units: unitType.isRequired,
};

export default getContext({ units: unitType })(Degree);
