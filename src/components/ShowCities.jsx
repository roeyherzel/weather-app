import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

import Spinner from './Spinner';
import Current from '../containers/Current';
import ActionBar from './ActionBar';
import { List, Item } from './common';


const ShowCities = ({
    isLoading,
    isEditing,
    units,
    cities,
    ...rest
}) => (
    <div>
        <ActionBar {...rest} isEditing={isEditing} />

        { isLoading
            ? <Spinner />
            : (
                <List>
                    { cities.map(({ cityID, ...data }) => (
                        <Item key={cityID}>
                            { isEditing
                                && (
                                    <Button
                                        compact
                                        icon="trash"
                                    />
                                )
                            }
                            <Current key={cityID} data={data} />
                        </Item>
                    )) }
                </List>
            )
        }
    </div>
);

export default ShowCities;
