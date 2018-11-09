import {
    compose,
    withState,
    withStateHandlers,
} from 'recompose';

import Weather from '../components/Weather';


const withMyCitiesState = withStateHandlers({
    myCities: [],
}, {
    addCity: ({ myCities }) => cityID => ([
        ...myCities,
        cityID,
    ]),
});

const withIsAddingState = withState('isAdding', 'setIsAdding', false);
const withIsEditingState = withState('isEditing', 'setIsEditing', false);


export default compose(
    withMyCitiesState,
    withIsAddingState,
    withIsEditingState,
)(Weather);
