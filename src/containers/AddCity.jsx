import {
    compose,
    withState,
    withStateHandlers,
    withHandlers,
} from 'recompose';
import { search } from '../api';

import AddCity from '../components/AddCity';


const withCitiesState = withState('results', 'setResults', null);

const withInputState = withStateHandlers({
    inputValue: '',
}, {
    handleInputChange: () => (e, { value }) => ({ inputValue: value }),
});

const withSearchHandler = withHandlers({
    handleSearch: ({ inputValue, setResults }) => ({ key }) => {
        if (key === undefined || key === 'Enter') {
            // TODO: handle error
            search(inputValue)
                .then(setResults);
        }
    },
});

export default compose(
    withCitiesState,
    withInputState,
    withSearchHandler,
)(AddCity);
