import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

import Current from '../containers/Current';
import UnitButtons from './UnitButtons';


const ActionRow = styled.div`
    display: flex;
    align-items: center;
`;

const List = styled.div`
    margin-top: 1.5rem;
`;


const ShowCities = ({
    myCities,
    units,
    handleSetUnit,
    toggleIsAdding,
}) => (
    <div>
        <ActionRow>
            <UnitButtons units={units} handleSetUnit={handleSetUnit} />

            <Button
                circular
                icon="setting"
                size="small"
            />

            <Button
                circular
                icon="add"
                size="small"
                onClick={toggleIsAdding}
            />
        </ActionRow>

        <List>
            { myCities.map(id => <Current key={id} cityID={id} />) }
        </List>
    </div>
);

export default ShowCities;
