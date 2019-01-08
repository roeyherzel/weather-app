import React, { Fragment } from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

import UnitButtons from './UnitButtons';


const Container = styled.div`
    display: flex;
    align-items: center;
`;

const ActionBtn = styled(Button).attrs({
    basic: true,
    circular: true,
    size: 'small',
})``;

const ActionBar = ({
    isEditing,
    toggleIsAdding,
    toggleIsEditing,
}) => (
    <Container>
        {
            isEditing ? (
                <ActionBtn
                    icon="reply"
                    onClick={toggleIsEditing}
                />
            ) : (
                <Fragment>
                    <ActionBtn
                        icon="setting"
                        onClick={toggleIsEditing}
                    />

                    <ActionBtn
                        icon="add"
                        onClick={toggleIsAdding}
                    />

                    <UnitButtons />
                </Fragment>
            )
        }
    </Container>
);

ActionBar.propTypes = {
    isEditing: bool.isRequired,
    toggleIsAdding: func.isRequired,
    toggleIsEditing: func.isRequired,
};

export default ActionBar;
