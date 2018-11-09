import React from 'react';
import { func } from 'prop-types';

import { Input } from 'semantic-ui-react';


const Search = ({
    handleInputChange,
    handleSearch,
}) => (
    <Input
        fluid
        size="small"
        placeholder="Enter city/city, country code"
        icon={{
            name: 'search',
            circular: true,
            link: true,
            onClick: handleSearch,
        }}
        onKeyPress={handleSearch}
        onChange={handleInputChange}
    />
);

Search.propTypes = {
    handleInputChange: func.isRequired,
    handleSearch: func.isRequired,
};

export default Search;
