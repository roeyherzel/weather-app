import React from 'react';
import {
    func, arrayOf, shape, number,
} from 'prop-types';

import { Button } from 'semantic-ui-react';

import Search from './Search';
import Current from './Current';
import { List, Item } from './common';


const AddCity = ({
    results,
    handleAddCity,
    ...rest
}) => (
    <div>
        <Search {...rest} />

        { results && (
            <List>
                { results.map(data => (
                    <Item key={data.cityID}>
                        <Button
                            compact
                            icon="add"
                            onClick={() => handleAddCity(data.cityID)}
                        />
                        <Current data={data} />
                    </Item>
                )) }
            </List>
        ) }
    </div>
);

AddCity.propTypes = {
    results: arrayOf(
        shape({
            cityID: number.isRequired,
        }).isRequired,
    ),
    handleAddCity: func.isRequired,
};

export default AddCity;
