import React from 'react';
import { func } from 'prop-types';

import { Segment, Input } from 'semantic-ui-react';
import Current from './Current';


const CityDropdown = ({
    handleInputChange,
    handleSearch,
    cities,
}) => (
    <div>

        <Segment inverted>
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
            <div>
                { cities.map(data => <Current key={data.cityID} data={data} />) }
            </div>
        ) }
    </div>
);

CityDropdown.propTypes = {
    handleInputChange: func.isRequired,
    handleSearch: func.isRequired,
};

export default CityDropdown;
