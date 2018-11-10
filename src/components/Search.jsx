import React from 'react';
import { func, bool, string } from 'prop-types';
import styled from 'styled-components';

import { Input, Button } from 'semantic-ui-react';


const Container = styled.div`
    display: flex;
    align-items: flex-start;
`;

const InputContainer = styled.div`
    flex: 1;
    margin-right: 5px;
`;

const Message = styled.div`
    margin-top: 8px;
    margin-left: 2px;

    ${p => p.error && `
        color: ${p.theme.color.red};
    `}
`;


const Search = ({
    error,
    message,
    isLoading,
    handleInputChange,
    handleSearch,
    toggleIsAdding,
}) => (
    <Container>
        <InputContainer>
            <Input
                fluid
                size="small"
                placeholder="Example: Portland / London, GB"
                icon={{
                    name: 'search',
                    circular: true,
                    link: true,
                    onClick: handleSearch,
                }}
                error={error}
                loading={isLoading}
                onKeyPress={handleSearch}
                onChange={handleInputChange}
            />
            { message
                && <Message error={error}>{ message }</Message>
            }
        </InputContainer>

        { /* TODO: hide cancel if myCities is empty */ }
        <Button
            basic
            size="small"
            icon="cancel"
            onClick={toggleIsAdding}
        />
    </Container>
);

Search.propTypes = {
    message: string,
    error: bool.isRequired,
    isLoading: bool.isRequired,
    handleInputChange: func.isRequired,
    handleSearch: func.isRequired,
    toggleIsAdding: func.isRequired,
};

export default Search;
