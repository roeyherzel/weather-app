import React from 'react';
import { arrayOf } from 'prop-types';
import styled from 'styled-components';

import Current from '../containers/Current';


const List = styled.div`
    margin-top: 1.5rem;
`;


const ShowCities = ({
    cities,
}) => (
    <List>
        { cities.map(id => <Current key={id} cityID={id} />) }
    </List>
);

export default ShowCities;
