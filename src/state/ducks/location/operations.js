import { getUrl } from '../../../openWeatherMap';
import actions from './actions';


export const fetchWeather = () => async (dispatch) => {

    const url = getUrl('weather', { zip: '97219,us' });

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const error = await response.text();
            console.log(error);
            throw new Error(error);
        }
        const data = await response.json();
        dispatch(actions.setWeather(data));

    } catch (error) {
        console.error(error);
        dispatch(actions.setWeather());
    }

};
