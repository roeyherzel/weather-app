import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';


const defaultState = fromJS({
    data: null,
});


const reducer = handleActions({
    SET_WEATHER: (state, { payload }) => state.set('data', payload),

}, defaultState);

export default reducer;
