import {
    compose,
    lifecycle,
    withContext,
    withState,
    withStateHandlers,
    setDisplayName,
} from 'recompose';
import { number, oneOf, arrayOf } from 'prop-types';

import withLocalStorage from '../enhancers/withLocalStorage';
import Weather from '../components/Weather';


// const initialState = {
//     myCities: [],
//     units: 'metric',
// };

// const serialState = JSON.stringify(initialState);

// const loadState = JSON.parse(serialState);

const getStorageProp = (prop) => {
    const res = new Map(JSON.parse(localStorage.getItem('cache')));
    console.log(res.get(prop));
    return res.get(prop);
};

const withWeatherState = withStateHandlers(() => {
    const myCities = getStorageProp('myCities') || [];
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

const withUnitsState = withState('units', 'handleSetUnit', getStorageProp('units') || 'metric');

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
