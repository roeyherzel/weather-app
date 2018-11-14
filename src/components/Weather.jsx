import React from 'react';
import {
    string, bool, func, array,
} from 'prop-types';
import styled from 'styled-components';
import { Segment, Header } from 'semantic-ui-react';
import media, { sizes as mediaSizes } from '../styleUtils/media';

import AddCity from '../containers/AddCity';
import ShowCities from '../containers/ShowCities';


const Page = styled.div`
    max-width: ${mediaSizes.mobile}px;
    margin: auto;
    margin-top: 4rem;

    ${media.mobile`
        margin: 0;
    `};
`;


const Weather = ({
    isAdding,
    ...rest
}) => (
    <Page>
        <Header
            inverted
            attached="top"
            textAlign="center"
            content="WeatherZone"
        />
        <Segment attached>
            { isAdding ? (
                <AddCity {...rest} />
            ) : (
                <ShowCities {...rest} />
            ) }
        </Segment>
    </Page>
);

Weather.propTypes = {
    units: string.isRequired,
    isAdding: bool.isRequired,
    myCities: array.isRequired,
    handleAddCity: func.isRequired,
    handleSetUnits: func.isRequired,
    toggleIsAdding: func.isRequired,
};

export default Weather;
