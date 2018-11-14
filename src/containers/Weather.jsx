import {
    compose,
    lifecycle,
    withContext,
    withState,
    withStateHandlers,
    setDisplayName,
} from 'recompose';
import { number, oneOf, arrayOf } from 'prop-types';

import withLocalStorage, { getStorage } from '../enhancers/withLocalStorage';
import Weather from '../components/Weather';


const withWeatherState = withStateHandlers(() => {
    const myCities = getStorage().get('myCities') || [];
    const isAdding = !myCities.length;

    return { myCities, isAdding };
},
{
    toggleIsAdding: ({ isAdding }) => () => ({ isAdding: !isAdding }),

    handleAddCity: ({ myCities }) => cityID => ({
        myCities: [...myCities, cityID],
        isAdding: false,
    }),
});

const withTimeTick = compose(
    setDisplayName('withTimeTick'),
    withStateHandlers({
        timestamp: Date.now(),
        intervalID: null,
    }, {
        setTimestamp: () => () => ({ timestamp: Date.now() }),
        setIntervalID: () => intervalID => ({ intervalID }),
    }),

    lifecycle({
        componentDidMount() {
            const { setTimestamp, setIntervalID } = this.props;
            setIntervalID(setInterval(setTimestamp, 60 * 1000));
        },
        componentWillUnmount() {
            clearInterval(this.props.intervalID);
        },
    }),
);

const withUnitsState = withState('units', 'handleSetUnit', getStorage().get('units') || 'metric');

const withWeatherContext = withContext({
    units: oneOf(['metric', 'imperial']),
    myCities: arrayOf(number),
    timestamp: number,
}, ({ timestamp, units, myCities }) => ({
    units,
    myCities,
    timestamp,
}));

export default compose(
    withWeatherState,
    withUnitsState,
    withTimeTick,
    withWeatherContext,
    withLocalStorage('myCities', 'units'),
)(Weather);
