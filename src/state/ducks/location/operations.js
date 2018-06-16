import actions from './actions';


export const fetchWeather = () => async (dispatch) => {

    const api = 'http://api.openweathermap.org/data/2.5/weather';
    const api_key = '1855f775ccc6226f29eb4d10d9327fc0';

    const params = {
        appid: api_key,
        zip: '97219,us',
        units: 'metric',
    };

    const url = new URL(api);
    url.search = new URLSearchParams(params);

    try {
        const response = await fetch(url);
        const data = await response.json();

        dispatch(actions.setWeather(data));

    } catch (error) {
        console.error(error);

        // dispatch(setWeather({ data: null }));
    }

};
