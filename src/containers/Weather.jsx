import {
    compose,
    withStateHandlers,
} from 'recompose';

import Weather from '../components/Weather';


const withWeatherState = withStateHandlers({
    isAdding: false,
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
