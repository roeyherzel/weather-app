import React from 'react';
import { arrayOf } from 'prop-types';
import styled from 'styled-components';

import Current from './Current';


const ShowCities = ({
    cities,
}) => (
    <div>
        { cities.map(c => <div>{ c }</div>) }
    </div>
);

export default ShowCities;
