import React, { Fragment } from 'react';
import {
    func, arrayOf, shape, number,
} from 'prop-types';

import { Button } from 'semantic-ui-react';

import Search from './Search';
import Card from '../containers/Card';
import { List, Item } from './common';


const AddCity = ({
    results,
    handleAddCity,
    ...rest
}) => (
    <Fragment>
        <Search {...rest} />

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
    </Fragment>
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
