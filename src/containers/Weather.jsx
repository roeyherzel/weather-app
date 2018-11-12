import {
    compose,
    lifecycle,
    withContext,
    withStateHandlers,
} from 'recompose';
import { number, oneOf, arrayOf } from 'prop-types';

import Weather from '../components/Weather';


// TODO: save persist state to localStorage
// TODO: load default state from localStorage
// TODO: isAdding default true if myCities.length === 0
const withWeatherState = withStateHandlers({
    isAdding: true,
    unit: 'metric',
    myCities: [],
    timestamp: Date.now(),
    timestampIntervalID: null,
}, {
    toggleIsAdding: ({ isAdding }) => () => ({ isAdding: !isAdding }),

    handleAddCity: ({ myCities }) => cityID => ({
        myCities: [...myCities, cityID],
        isAdding: false,
    }),

    handleChangeUnit: () => unit => ({ unit }),

    updateTimestamp: () => () => ({ timestamp: Date.now() }),

    setTimestampIntervalID: () => timestampIntervalID => ({ timestampIntervalID }),
});

export const weatherContext = {
    timestamp: number,
    unit: oneOf(['metric', 'imperial']),
    myCities: arrayOf(number),
};

const withWeatherContext = withContext(weatherContext, ({ timestamp, unit, myCities }) => ({
    unit,
    myCities,
    timestamp,
}));

const withLifecycle = lifecycle({
    componentDidMount() {
        const { updateTimestamp, setTimestampIntervalID } = this.props;
        setTimestampIntervalID(setInterval(updateTimestamp, 60 * 1000));
    },

    componentWillUnmount() {
        clearInterval(this.props.timestampIntervalID);
    },
});
export default compose(
    withWeatherState,
    withWeatherContext,
    withLifecycle,
)(Weather);
