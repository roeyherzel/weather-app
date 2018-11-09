import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';
import { Segment, Button } from 'semantic-ui-react';
import media, { sizes as mediaSizes } from '../styleUtils/media';

import AddCity from '../containers/AddCity';


const Page = styled.div`
    max-width: ${mediaSizes.mobile}px;
    margin: auto;
    margin-top: 4rem;

    ${media.mobile`
        margin: 0;
    `};
`;

const Header = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

const H1 = styled.h1`
    margin-bottom: 0;
`;

const Main = styled.main`
`;

const Weather = ({
    isAdding,
}) => (
    <Page>
        <Segment>
            <Header>
                <H1>WeatherZone</H1>
                <Button.Group size="mini">
                    <Button secondary>C&deg;</Button>
                    <Button>F&deg;</Button>
                </Button.Group>
            </Header>
            <Main>
                { isAdding
                    && <AddCity />
                }
            </Main>
        </Segment>
    </Page>
);

Weather.propTypes = {
    isAdding: bool.isRequired,
};

export default Weather;
