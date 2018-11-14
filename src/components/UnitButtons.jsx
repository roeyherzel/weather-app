import React from 'react';
import { oneOf, func } from 'prop-types';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';


const StyledButtonGroup = styled(Button.Group)`
    && {
        margin-right: auto;
    }
`;

const UnitButtons = ({ units, handleSetUnit }) => (
    <StyledButtonGroup basic size="mini">
        <Button active={units === 'metric'} onClick={() => handleSetUnit('metric')}>
            C&deg;
        </Button>
        <Button active={units === 'imperial'} onClick={() => handleSetUnit('imperial')}>
            F&deg;
        </Button>
    </StyledButtonGroup>
);

UnitButtons.propTypes = {
    units: oneOf(['metric', 'imperial']).isRequired,
    handleSetUnit: func.isRequired,
};

export default UnitButtons;
