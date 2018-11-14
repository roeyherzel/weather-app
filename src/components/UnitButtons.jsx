import React from 'react';
import { oneOf, func } from 'prop-types';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';


const StyledButtonGroup = styled(Button.Group)`
    && {
        margin-right: auto;
    }
`;

const UnitButtons = ({ unit, handleSetUnit }) => (
    <StyledButtonGroup basic size="mini">
        <Button active={unit === 'metric'} onClick={() => handleSetUnit('metric')}>
            C&deg;
        </Button>
        <Button active={unit === 'imperial'} onClick={() => handleSetUnit('imperial')}>
            F&deg;
        </Button>
    </StyledButtonGroup>
);

UnitButtons.propTypes = {
    unit: oneOf(['metric', 'imperial']).isRequired,
    handleSetUnit: func.isRequired,
};

export default UnitButtons;
