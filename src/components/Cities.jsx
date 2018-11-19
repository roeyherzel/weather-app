import React from 'react';
import {
    arrayOf, shape, number, bool, func,
} from 'prop-types';

import { Button } from 'semantic-ui-react';

import ActionBar from './ActionBar';
import Current from '../containers/Current';
import { List, Item } from './common';


const Cities = ({
    myCitiesData = [],
    isEditing,
    handleRemoveCity,
    ...rest
}) => (
    <div>
        <ActionBar {...rest} isEditing={isEditing} />

        <List>
            { myCitiesData.map(({ cityID, ...data }) => (
                <Item key={cityID}>
                    { isEditing
                        && (
                            <Button
                                compact
                                icon="trash"
                                onClick={() => handleRemoveCity(cityID)}
                            />
                        )
                    }
                    <Current data={data} />
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
    handleRemoveCity: func.isRequired,
};

export default Cities;
