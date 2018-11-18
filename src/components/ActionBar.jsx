import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

import UnitButtons from './UnitButtons';


const Container = styled.div`
    display: flex;
    align-items: center;
`;

const BackBtn = styled(Button)`
    && {
        margin-left: auto;
    }
`;

const ActionBar = ({
    isEditing,
    toggleIsAdding,
    toggleIsEditing,
}) => (isEditing
    ? (
        <Container>
            <BackBtn
                basic
                positive
                circular
                icon="check"
                size="small"
                onClick={toggleIsEditing}
            />
        </Container>
    )
    : (
        <Container>
            <UnitButtons />

            <Button
                circular
                icon="setting"
                size="small"
                onClick={toggleIsEditing}
            />

            <Button
                circular
                icon="add"
                size="small"
                onClick={toggleIsAdding}
            />
        </Container>
    ));

export default ActionBar;
