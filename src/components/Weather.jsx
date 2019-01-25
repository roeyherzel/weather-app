import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

import { Segment } from 'semantic-ui-react';
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


const Main = styled(Segment)`
    && {
        min-height: 4rem;
    }
`;

const Title = styled.span`
    font-family: 'Signika', sans-serif;
    font-size: 1.5rem;
    color: white;
`;


const Weather = ({
    isAdding,
    myCities,
    handleAddCity,
    toggleIsAdding,
    ...rest
}) => (
    <Page>
        <Segment inverted compact attached="top">
            <Title>WeatherZ</Title>
        </Segment>

        <Main attached>

            { isAdding
                ? (
                    <AddCity
                        myCities={myCities}
                        handleAddCity={handleAddCity}
                        toggleIsAdding={toggleIsAdding}
                    />
                )
                : (
                    <Cities
                        myCities={myCities}
                        toggleIsAdding={toggleIsAdding}
                        {...rest}
                    />
                )
            }
        </Main>
    </Page>
);

Weather.propTypes = {
    isAdding: bool.isRequired,
};

export default Weather;
