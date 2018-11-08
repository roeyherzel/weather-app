import React from 'react';
import {
    func, arrayOf, shape, number,
} from 'prop-types';
import styled from 'styled-components';

import { Segment, Input, Button } from 'semantic-ui-react';
import Current from './Current';


const Item = styled.div`
    display: flex;
    align-items: stretch;
    margin-top: 1rem;
`;

const StyledSegment = styled(Segment)`
    && {
        flex: 1;
        margin: 0;
        ${'' /* border-bottom-left-radius: 0;
        border-top-left-radius: 0; */}
    }
`;

const StyledButton = styled(Button)`
    && {
        ${'' /* margin: 0;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0; */}
    }
`;


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
                { cities.map(data => (
                    <Item>
                        <StyledButton icon="add" />
                        <StyledSegment>
                            <Current key={data.cityID} data={data} />
                        </StyledSegment>
                    </Item>
                )) }
            </div>
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
