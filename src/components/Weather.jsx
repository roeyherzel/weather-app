import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';
import { Segment, Header } from 'semantic-ui-react';
import media, { sizes as mediaSizes } from '../styleUtils/media';

import AddCity from '../containers/AddCity';
import Cities from '../containers/Cities';


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
            { isAdding
                ? <AddCity {...rest} />
                : <Cities {...rest} />
            }
        </Segment>
    </Page>
);

Weather.propTypes = {
    isAdding: bool.isRequired,
};

export default Weather;
