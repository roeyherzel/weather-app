import React from 'react';
import { oneOf, func } from 'prop-types';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';


const StyledButtonGroup = styled(Button.Group)`
    && {
        margin-right: auto;
    }
`;

const UnitButtons = ({ units, handleSetUnits }) => (
    <StyledButtonGroup basic size="mini">
        <Button active={units === 'metric'} onClick={() => handleSetUnits('metric')}>
            C&deg;
        </Button>
        <Button active={units === 'imperial'} onClick={() => handleSetUnits('imperial')}>
            F&deg;
        </Button>
    </StyledButtonGroup>
);

UnitButtons.propTypes = {
    units: oneOf(['metric', 'imperial']).isRequired,
    handleSetUnits: func.isRequired,
};

export default UnitButtons;
