import {
    compose,
    withContext,
    withStateHandlers,
} from 'recompose';
import { number, oneOf, arrayOf } from 'prop-types';

import withLocalStorage, { getStorage } from '../enhancers/withLocalStorage';
import withTimeTick from '../enhancers/withTimeTick';

import Weather from '../components/Weather';


const withAppState = withStateHandlers(() => {
    const storage = getStorage();
    const units = storage.get('units') || 'metric';
    const myCities = storage.get('myCities') || [];
    const isAdding = !myCities.length;

    return { units, myCities, isAdding };
},
{
    toggleIsAdding: ({ isAdding }) => () => ({ isAdding: !isAdding }),

    handleAddCity: ({ myCities }) => cityID => ({
        myCities: [...myCities, cityID],
        isAdding: false,
    }),

    handleSetUnits: () => units => ({ units }),
});

const withAppContext = withContext({
    units: oneOf(['metric', 'imperial']),
    myCities: arrayOf(number),
    timestamp: number,
}, ({ timestamp, units, myCities }) => ({
    units,
    myCities,
    timestamp,
}));

export default compose(
    withAppState,
    withTimeTick,
    withAppContext,
    withLocalStorage('myCities', 'units'),
)(Weather);
