import React from 'react';
import { arrayOf } from 'prop-types';
import styled from 'styled-components';

import Current from '../containers/Current';


const ShowCities = ({
    cities,
}) => (
    <div>
        { cities.map(id => <Current key={id} cityID={id} />) }
    </div>
);

export default ShowCities;
