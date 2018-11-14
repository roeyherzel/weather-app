import React from 'react';
import {
    string, bool, func, array,
} from 'prop-types';
import styled from 'styled-components';
import { Segment, Header, Button } from 'semantic-ui-react';
import media, { sizes as mediaSizes } from '../styleUtils/media';

import AddCity from '../containers/AddCity';
import ShowCities from './ShowCities';
import UnitButtons from './UnitButtons';


const Page = styled.div`
    max-width: ${mediaSizes.mobile}px;
    margin: auto;
    margin-top: 4rem;

    ${media.mobile`
        margin: 0;
    `};
`;

const ActionRow = styled.div`
    display: flex;
    align-items: center;
`;


const Weather = ({
    unit,
    isAdding,
    myCities,
    handleAddCity,
    handleSetUnit,
    toggleIsAdding,
}) => (
    <Page>
        <Header
            inverted
            attached="top"
            textAlign="center"
            content="WeatherZone"
        />
        <Segment attached>
            { !isAdding && (
                <ActionRow>
                    <UnitButtons unit={unit} handleSetUnit={handleSetUnit} />

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
            ) }

            <div>
                { isAdding
                    ? <AddCity handleAddCity={handleAddCity} toggleIsAdding={toggleIsAdding} />
                    : <ShowCities cities={myCities} />
                }
            </div>
        </Segment>
    </Page>
);

Weather.propTypes = {
    unit: string.isRequired,
    isAdding: bool.isRequired,
    myCities: array.isRequired,
    handleAddCity: func.isRequired,
    handleSetUnit: func.isRequired,
    toggleIsAdding: func.isRequired,
};

export default Weather;
