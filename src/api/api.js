import axios from 'axios';
import { transformCurrentWeather } from './transform';


const API = 'http://api.openweathermap.org/data/2.5';
const KEY = '1855f775ccc6226f29eb4d10d9327fc0';

const baseParams = {
    appid: KEY,
};

export async function getCityWeather({ id, units }) {
    try {
        const { data } = await axios.get(`${API}/weather`, {
            params: {
                ...baseParams,
                id,
                units,
            },
        });
        return transformCurrentWeather(data);

    } catch (error) {
        throw error;
    }
}

export async function search({ q, units }) {
    // TODO: replace '-' with space
    try {
        const { data } = await axios.get(`${API}/find`, {
            params: {
                ...baseParams,
                q,
                units,
                type: 'accurate',
            },
        });

        return data.list.map(transformCurrentWeather);

    } catch (error) {
        throw error;
    }
}
