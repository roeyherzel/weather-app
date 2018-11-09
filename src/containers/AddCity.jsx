import {
    compose,
    withStateHandlers,
    withHandlers,
} from 'recompose';
import { search } from '../api';

import AddCity from '../components/AddCity';


const withSearchState = withStateHandlers({
    inputValue: '',
    results: null,
    isLoading: false,
}, {
    handleInputChange: () => (e, { value }) => ({ inputValue: value }),

    setResults: () => results => ({ results }),

    clearResults: () => () => ({ results: null }),

    setIsLoading: () => isLoading => ({ isLoading }),
});

const withSearchHandler = withHandlers({
    handleSearch: ({
        inputValue,
        setResults,
        clearResults,
        setIsLoading,
    }) => async ({ key }) => {
        if (key === undefined || key === 'Enter') {
            // TODO: handle error
            setIsLoading(true);
            clearResults();
            const results = await search(inputValue);
            setResults(results);
            setIsLoading(false);
        }
    },
});

export default compose(
    withSearchState,
    withSearchHandler,
)(AddCity);
