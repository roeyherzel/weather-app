import axios from 'axios';
import { transformCurrentWeather } from './transform';


const API = 'http://api.openweathermap.org/data/2.5';
const KEY = '1855f775ccc6226f29eb4d10d9327fc0';

const baseParams = {
    appid: KEY,
};

export async function search({ q, units }) {
    // TODO: city name, replace '-' with space
    try {
        const { data } = await axios.get(`${API}/find`, {
            params: {
                ...baseParams,
                q,
                units,
                type: 'like',
            },
        });

        return data.list.map(transformCurrentWeather);

    } catch (error) {
        throw error;
    }
}

export async function getGroup({ id, units }) {
    try {
        const { data } = await axios.get(`${API}/group`, {
            params: {
                ...baseParams,
                id,
                units,
            },
        });

        return data.list.map(transformCurrentWeather);

    } catch (error) {
        throw error;
    }
}
