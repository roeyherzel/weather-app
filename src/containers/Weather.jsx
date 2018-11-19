import {
    compose,
    withContext,
    withStateHandlers,
} from 'recompose';
import {
    number, oneOf, arrayOf, func,
} from 'prop-types';

import withLocalStorage, { getStorage } from '../enhancers/withLocalStorage';
import withTimeTick from '../enhancers/withTimeTick';

import Weather from '../components/Weather';


const withAppState = withStateHandlers(() => {
    const storage = getStorage();
    const units = storage.get('units') || 'metric';
    const myCities = storage.get('myCities') || [];

    return {
        units,
        myCities,
        isAdding: !myCities.length,
        isEditing: false,
    };
},
{
    toggleIsEditing: ({ isEditing }) => () => ({ isEditing: !isEditing }),

    toggleIsAdding: ({ isAdding }) => () => ({ isAdding: !isAdding }),

    handleAddCity: ({ myCities }) => cityID => ({
        myCities: [...myCities, cityID],
        isAdding: false,
    }),

    handleChangeUnits: () => units => ({ units }),
});

const withAppContext = withContext({
    units: oneOf(['metric', 'imperial']),
    handleChangeUnits: func,
    myCities: arrayOf(number),
    timestamp: number,
}, ({
    timestamp, units, handleChangeUnits, myCities,
}) => ({
    timestamp, units, handleChangeUnits, myCities,
}));

export default compose(
    withAppState,
    withTimeTick,
    withAppContext,
    withLocalStorage('myCities', 'units'),
)(Weather);
