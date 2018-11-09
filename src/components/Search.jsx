import React from 'react';
import { func, bool } from 'prop-types';
import styled from 'styled-components';

import { Input, Button } from 'semantic-ui-react';


const Container = styled.div`
    display: flex;
`;

const StyledInput = styled(Input)`
    && {
        flex: 1;
        margin-right: 5px;
    }
`;

// TODO: show no results
// TODO: show error
const Search = ({
    isLoading,
    handleInputChange,
    handleSearch,
    toggleIsAdding,
}) => (
    <Container>
        <StyledInput
            fluid
            size="small"
            placeholder="Enter city/city, country code"
            icon={{
                name: 'search',
                circular: true,
                link: true,
                onClick: handleSearch,
            }}
            loading={isLoading}
            onKeyPress={handleSearch}
            onChange={handleInputChange}
        />

        { /* TODO: hide cancel if myCities is empty */ }
        <Button
            size="small"
            icon="cancel"
            onClick={toggleIsAdding}
        />
    </Container>
);

Search.propTypes = {
    isLoading: bool.isRequired,
    handleInputChange: func.isRequired,
    handleSearch: func.isRequired,
    toggleIsAdding: func.isRequired,
};

export default Search;
