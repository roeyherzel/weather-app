import {
    compose,
    withStateHandlers,
    withHandlers,
} from 'recompose';
import { search } from '../api';

import CitySearch from '../components/CitySearch';


const withInputState = withStateHandlers({
    inputValue: '',
}, {
    handleInputChange: () => (e, { value }) => ({ inputValue: value }),
});

const withSearchHandler = withHandlers({
    handleSearch: ({ inputValue }) => ({ key }) => {
        if (key === undefined || key === 'Enter') {
            search(inputValue);
        }
    },
});

export default compose(
    withInputState,
    withSearchHandler,
)(CitySearch);
