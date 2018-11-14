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
    units: 'metric',
    myCities: [],
    timestamp: Date.now(),
    timestampIntervalID: null,
}, {
    toggleIsAdding: ({ isAdding }) => () => ({ isAdding: !isAdding }),

    handleAddCity: ({ myCities }) => cityID => ({
        myCities: [...myCities, cityID],
        isAdding: false,
    }),

    handleChangeUnit: () => units => ({ units }),

    setTimestamp: () => () => ({ timestamp: Date.now() }),

    setIntervalID: () => timestampIntervalID => ({ timestampIntervalID }),

    handleSetUnit: () => units => ({ units }),
});

const withWeatherContext = withContext({
    units: oneOf(['metric', 'imperial']),
    myCities: arrayOf(number),
    timestamp: number,
}, ({ timestamp, units, myCities }) => ({
    units,
    myCities,
    timestamp,
}));

const withLifecycle = lifecycle({
    componentDidMount() {
        const { setTimestamp, setIntervalID } = this.props;
        setIntervalID(setInterval(setTimestamp, 60 * 1000));
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
