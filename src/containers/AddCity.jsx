import { oneOf } from 'prop-types';
import {
    compose,
    withStateHandlers,
    withHandlers,
    getContext,
} from 'recompose';
import api from '../api';
import { transformError } from '../api/transform';

import AddCity from '../components/AddCity';


const withSearchState = withStateHandlers({
    inputValue: '',
    results: null,
    isLoading: false,
    message: null,
    error: false,
}, {
    setResults: () => results => ({
        results,
        message: !results.length ? 'No results found' : null,
        error: false,
    }),

    clearResults: () => () => ({
        results: null,
    }),

    setIsLoading: () => isLoading => ({
        isLoading,
    }),

    setMessage: () => message => ({
        message,
        error: true,
    }),

    clearMessgae: () => () => ({
        message: null,
        error: false,
    }),

    handleInputChange: () => (e, { value }) => ({
        inputValue: value,
    }),
});

const withSearchHandler = withHandlers({
    handleSearch: ({
        inputValue,
        clearResults,
        clearMessgae,
        setResults,
        setIsLoading,
        setMessage,
        units,
    }) => async ({ key, type }) => {
        const isKeyEnter = (type === 'keypress' && key === 'Enter');
        const isMouseClick = (type === 'click' && key === undefined);

        if (!(isKeyEnter || isMouseClick)) {
            return;
        }

        if (inputValue.length < 3) {
            return setMessage('Requires minimum 3 characters');
        }

        clearResults();
        clearMessgae();
        setIsLoading(true);

        try {
            const results = await api.search({ q: inputValue, units });
            setResults(results);
            setIsLoading(false);

        } catch (error) {
            setMessage(transformError(error));
            setIsLoading(false);
        }
    },
});

export default compose(
    getContext({
        units: oneOf(['metric', 'imperial']),
    }),
    withSearchState,
    withSearchHandler,
)(AddCity);
