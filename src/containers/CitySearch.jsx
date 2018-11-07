import {
    compose,
    withState,
    withStateHandlers,
    withHandlers,
} from 'recompose';
import { search } from '../api';

import CitySearch from '../components/CitySearch';


const withCitiesState = withState('cities', 'setCities', null);

const withInputState = withStateHandlers({
    inputValue: '',
}, {
    handleInputChange: () => (e, { value }) => ({ inputValue: value }),
});

const withSearchHandler = withHandlers({
    handleSearch: ({ inputValue, setCities }) => ({ key }) => {
        if (key === undefined || key === 'Enter') {
            search(inputValue).then(setCities);
        }
    },
});

export default compose(
    withCitiesState,
    withInputState,
    withSearchHandler,
)(CitySearch);
