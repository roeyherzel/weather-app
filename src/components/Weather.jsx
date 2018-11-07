import React from 'react';
import styled from 'styled-components';

import { Header } from 'semantic-ui-react';


const Container = styled.div`
    width: 50%;
    margin: 4rem;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 6px;
`;

const Weather = ({
    data: {
        dt,
        name,
        country,
    },
}) => (
    <Container>
        <Header size="large">
            { name }
            { ', ' }
            { country }
            <Header.Subheader>{ dt.format('ddd LT') }</Header.Subheader>
        </Header>
    </Container>
);

export default Weather;
