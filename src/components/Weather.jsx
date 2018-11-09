import React from 'react';
import { bool, func, array } from 'prop-types';
import styled from 'styled-components';
import { Segment, Header, Button } from 'semantic-ui-react';
import media, { sizes as mediaSizes } from '../styleUtils/media';

import AddCity from '../containers/AddCity';
import ShowCities from './ShowCities';


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
    margin-bottom: 1.5rem;
`;

const UnitsButtonGroup = styled(Button.Group)`
    && {
        margin-right: auto;
    }
`;

const Weather = ({
    isAdding,
    myCities,
    handleAddCity,
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
            <ActionRow>
                <UnitsButtonGroup basic size="mini">
                    <Button active>C&deg;</Button>
                    <Button>F&deg;</Button>
                </UnitsButtonGroup>

                { !isAdding && (
                    <Button
                        basic
                        circular
                        icon="add"
                        size="small"
                        onClick={toggleIsAdding}
                    />
                ) }

                <Button icon="setting" basic circular size="small" />
            </ActionRow>

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
    isAdding: bool.isRequired,
    myCities: array.isRequired,
    handleAddCity: func.isRequired,
    toggleIsAdding: func.isRequired,
};

export default Weather;
