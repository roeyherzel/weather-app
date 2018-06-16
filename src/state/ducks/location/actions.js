import { createActions } from 'redux-actions';
import { transformWeather } from './transforms';


const actions = createActions({ SET_WEATHER: data => transformWeather(data) });

export default actions;
