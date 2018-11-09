import {
    compose,
    withStateHandlers,
} from 'recompose';

import Weather from '../components/Weather';


// TODO: save persist state to localStorage
// TODO: load default state from localStorage
// TODO: isAdding default true if myCities.length === 0
const withWeatherState = withStateHandlers({
    isAdding: true,
    myCities: [],
}, {
    toggleIsAdding: ({ isAdding }) => () => ({ isAdding: !isAdding }),

    handleAddCity: ({ myCities }) => cityID => ({
        myCities: [...myCities, cityID],
        isAdding: false,
    }),
});

export default compose(
    withWeatherState,
)(Weather);
