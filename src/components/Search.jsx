import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';

import { Input, Button } from 'semantic-ui-react';


const Container = styled.div`
    display: flex;
`;

const StyledInput = styled(Input)`
    && {
        flex: 1;
        margin-right: 1rem;
    }
`;

const Search = ({
    handleInputChange,
    handleSearch,
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
            onKeyPress={handleSearch}
            onChange={handleInputChange}
        />

        <Button size="small" icon="cancel" circular />
    </Container>
);

Search.propTypes = {
    handleInputChange: func.isRequired,
    handleSearch: func.isRequired,
};

export default Search;
