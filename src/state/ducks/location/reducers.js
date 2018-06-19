import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { transformWeather } from './transforms';


const defaultState = fromJS({
    data: null,
});


const reducer = handleActions({
    SET_WEATHER: (state, { payload }) => state.set('data', payload ? transformWeather(payload) : null),

}, defaultState);

export default reducer;
