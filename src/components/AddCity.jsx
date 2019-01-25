import React from 'react';
import {
    func, arrayOf, shape, number,
} from 'prop-types';

import { Button } from 'semantic-ui-react';

import Search from './Search';
import Card from './Card';
import { List, Item } from './common';


const AddCity = ({
    results,
    handleAddCity,
    myCities,
    ...rest
}) => (
    <div>
        <Search {...rest} showCancelBtn={!!myCities.length} />

        { results && (
            <List>
                { results.map(({ cityID, ...data }) => (
                    <Item key={cityID}>
                        <Button
                            compact
                            icon="add"
                            onClick={() => handleAddCity(cityID)}
                        />
                        <Card data={data} />
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
