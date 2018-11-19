import {
    compose,
    withContext,
    withStateHandlers,
    mapProps,
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
        myCitiesData: new Map(),
        isAdding: !myCities.length,
        isEditing: false,
    };
},
{
    toggleIsAdding: ({ isAdding }) => () => ({
        isAdding: !isAdding,
    }),

    toggleIsEditing: ({ isEditing }) => () => ({
        isEditing: !isEditing,
    }),

    handleAddCity: ({ myCities }) => cityID => ({
        myCities: [...myCities, cityID],
        isAdding: false,
    }),

    handleRemoveCity: ({ myCities }) => (cityID) => {
        const filtered = myCities.filter(id => id !== cityID);
        return ({
            myCities: filtered,
            isAdding: !filtered.length,
            isEditing: !!filtered.length,
        });
    },

    handleChangeUnits: () => units => ({
        units,
    }),

    setCitiesData: () => data => ({
        myCitiesData: new Map(data.map(d => [d.cityID, d])),
    }),
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

// FIXME: hack to tie myCitiesData to myCities. makes city unmount on removeCity
// TODO: change myCities to Map id => data
// TODO: on intial state, clear data
// TODO: Cities on componentDidMount check if need to fetch
// TODO: handleAdddCity(id, data);
const withMappedProps = mapProps(({ myCities, myCitiesData, ...props }) => ({
    ...props,
    myCities,
    myCitiesData: myCities.map(id => myCitiesData.get(id)),
}));

export default compose(
    withAppState,
    withTimeTick,
    withAppContext,
    withLocalStorage('myCities', 'units'),
    withMappedProps,
)(Weather);
