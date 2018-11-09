import React from 'react';
import { bool, func, array } from 'prop-types';
import styled from 'styled-components';
import { Segment, Button } from 'semantic-ui-react';
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

const H1 = styled.h1`
    margin-bottom: 1rem;
`;

const ActionRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

const StyledButtonGroup = styled(Button.Group)`
    && {
        margin-left: auto;
    }
`;

const Weather = ({
    isAdding,
    myCities,
    handleAddCity,
}) => (
    <Page>
        <Segment>
            <header>
                <H1>WeatherZone</H1>
                <ActionRow>
                    <Button icon="setting" basic size="small" circular />
                    <Button icon="add" basic size="small" circular />
                    <StyledButtonGroup basic size="mini">
                        <Button active>C&deg;</Button>
                        <Button>F&deg;</Button>
                    </StyledButtonGroup>
                </ActionRow>
            </header>
            <main>
                { isAdding
                    ? <AddCity handleAddCity={handleAddCity} />
                    : <ShowCities cities={myCities} />
                }
            </main>
        </Segment>
    </Page>
);

Weather.propTypes = {
    isAdding: bool.isRequired,
    handleAddCity: func.isRequired,
    myCities: array.isRequired,
};

export default Weather;
