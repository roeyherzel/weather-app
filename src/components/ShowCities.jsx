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
    units,
    cities,
    handleSetUnits,
    toggleIsAdding,
}) => (
    <div>
        <ActionRow>
            <UnitButtons units={units} handleSetUnits={handleSetUnits} />

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
            { cities.map(({ cityID, ...data }) => <Current key={cityID} data={data} />) }
        </List>
    </div>
);

export default ShowCities;
