import React from 'react';
import {
    func, arrayOf, shape, number,
} from 'prop-types';
import styled from 'styled-components';

import { Segment, Input, Button } from 'semantic-ui-react';
import Current from './Current';


const List = styled.div`
`;

const Item = styled.div`
    display: flex;
    align-items: stretch;
    margin-bottom: 1rem;
`;


const CityDropdown = ({
    handleInputChange,
    handleSearch,
    cities,
}) => (
    <div>
        <Segment inverted>
            WeatherZone
            <Input
                fluid
                inverted
                size="small"
                placeholder="Search..."
                icon={{
                    name: 'search',
                    circular: true,
                    link: true,
                    onClick: handleSearch,
                }}
                onKeyPress={handleSearch}
                onChange={handleInputChange}
            />

        </Segment>

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
