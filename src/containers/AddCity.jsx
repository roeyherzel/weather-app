import { oneOf } from 'prop-types';
import {
    compose,
    withStateHandlers,
    withHandlers,
    getContext,
    mapProps,
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
    }),

    clearResults: () => () => ({
        results: null,
    }),

    setIsLoading: () => isLoading => ({
        isLoading,
    }),

    setMessage: () => (message, error = false) => ({
        message,
        error,
    }),

    clearMessgae: () => () => ({
        message: null,
        error: false,
    }),

    handleInputChange: () => (e, { value }) => ({
        inputValue: value,
        message: null,
        error: false,
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
            return setMessage('Requires at least 3 characters');
        }

        clearResults();
        clearMessgae();
        setIsLoading(true);

        try {
            const results = await api.search({ q: inputValue, units });

            if (results.length) {
                setResults(results);
            } else {
                setMessage('Not found');
            }
            setIsLoading(false);

        } catch (error) {
            setMessage(transformError(error), true);
            setIsLoading(false);
        }
    },
});

const withComponentProps = mapProps(({
    myCities,
    ...rest
}) => ({
    showCancelBtn: !!myCities.length,
    ...rest,
}));

export default compose(
    getContext({
        units: oneOf(['metric', 'imperial']),
    }),
    withSearchState,
    withSearchHandler,
    withComponentProps,
)(AddCity);
