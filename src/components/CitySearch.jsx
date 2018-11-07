import React from 'react';
import { func } from 'prop-types';

import { Segment, Input } from 'semantic-ui-react';


const CityDropdown = ({
    handleInputChange,
    handleSearch,
}) => (
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
);

CityDropdown.propTypes = {
    handleInputChange: func.isRequired,
    handleSearch: func.isRequired,
};

export default CityDropdown;
