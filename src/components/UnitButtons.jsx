import React from 'react';
import { oneOf, func } from 'prop-types';
import styled from 'styled-components';
import { getContext } from 'recompose';
import { Button } from 'semantic-ui-react';


const StyledButtonGroup = styled(Button.Group)`
    && {
        margin-right: auto;
    }
`;

const UnitButtons = ({ units, handleChangeUnits }) => (
    <StyledButtonGroup basic size="mini">
        <Button active={units === 'metric'} onClick={() => handleChangeUnits('metric')}>
            C&deg;
        </Button>
        <Button active={units === 'imperial'} onClick={() => handleChangeUnits('imperial')}>
            F&deg;
        </Button>
    </StyledButtonGroup>
);

UnitButtons.propTypes = {
    units: oneOf(['metric', 'imperial']).isRequired,
    handleChangeUnits: func.isRequired,
};

export default getContext({
    units: oneOf(['metric', 'imperial']),
    handleChangeUnits: func,
})(UnitButtons);
