import React from 'react';
import {
    func, arrayOf, shape, number,
} from 'prop-types';
import styled from 'styled-components';

import { Button } from 'semantic-ui-react';

import Search from './Search';
import Current from './Current';


const List = styled.ul`
    margin-top: 1rem;
    list-style: none;
    padding: 0;
`;

const Item = styled.li`
    display: flex;
    align-items: stretch;
    margin-bottom: 1rem;
`;


const CityDropdown = ({
    cities,
    ...rest
}) => (
    <div>
        <Search {...rest} />

        { cities && (
            <List>
                { cities.map(data => (
                    <Item key={data.cityID}>
                        <Button
                            compact
                            color="twitter"
                            icon="add"
                        />
                        <Current data={data} />
                    </Item>
                )) }
            </List>
        ) }
    </div>
);

CityDropdown.propTypes = {
    handleInputChange: func.isRequired,
    handleSearch: func.isRequired,
    cities: arrayOf(shape({
        cityID: number.isRequired,
    }).isRequired),
};

export default CityDropdown;
