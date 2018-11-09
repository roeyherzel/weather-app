import {
    compose,
    withStateHandlers,
} from 'recompose';

import Weather from '../components/Weather';


const withMyCitiesState = withStateHandlers({
    cities: [],
}, {
    addCity: ({ cities }) => cityID => ([
        ...cities,
        cityID,
    ]),
});

export default compose(
    withMyCitiesState,
)(Weather);
