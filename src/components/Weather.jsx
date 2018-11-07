import React from 'react';
import styled from 'styled-components';
import media, { sizes as mediaSizes } from '../styleUtils/media';

import CitySearch from '../containers/CitySearch';


const Page = styled.div`
    max-width: ${mediaSizes.mobile}px;
    margin: 4rem;

    ${media.mobile`
        margin: 0;
    `};
`;

const Weather = () => (
    <Page>
        <CitySearch />
    </Page>
);

export default Weather;
