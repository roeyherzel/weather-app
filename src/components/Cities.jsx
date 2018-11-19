import React from 'react';
import {
    arrayOf, shape, number, bool,
} from 'prop-types';

import { Button } from 'semantic-ui-react';

import ActionBar from './ActionBar';
import Current from '../containers/Current';
import { List, Item } from './common';


const Cities = ({
    cities = [],
    isEditing,
    ...rest
}) => (
    <div>
        <ActionBar {...rest} isEditing={isEditing} />

        <List>
            { cities.map(({ cityID, ...data }) => (
                <Item key={cityID}>
                    { isEditing
                        && (
                            <Button
                                compact
                                icon="trash"
                                // onClick={() => handleRemoveCity(data.cityID)}
                            />
                        )
                    }
                    <Current key={cityID} data={data} />
                </Item>
            )) }
        </List>
    </div>
);

Cities.propTypes = {
    isEditing: bool.isRequired,
    cities: arrayOf(shape({
        cityID: number.isRequired,
    }).isRequired),
};

export default Cities;
