import axios from 'axios';
import { transformCurrentWeather } from './transform';


const API = 'http://api.openweathermap.org/data/2.5';
const KEY = '1855f775ccc6226f29eb4d10d9327fc0';

const portlandCityID = 420029256;

const baseParams = {
    appid: KEY,
    units: 'metric',
};

export async function getCityWeather(cityID = portlandCityID) {
    try {
        const { data } = await axios.get(`${API}/weather`, {
            params: {
                ...baseParams,
                id: cityID,
            },
        });
        return transformCurrentWeather(data);

    } catch (error) {
        console.error(error); // eslint-disable-line no-console
    }
}

export async function search(query) {
    try {
        const { data } = await axios.get(`${API}/find`, {
            params: {
                ...baseParams,
                q: query,
                type: 'like',
            },
        });

        return data.list.map(transformCurrentWeather);

    } catch (error) {
        const { response: { status, statusText } } = error;
        console.error({ status, statusText }); // eslint-disable-line no-console
    }
}
