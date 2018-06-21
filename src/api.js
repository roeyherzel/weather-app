const API_URL = 'http://api.openweathermap.org/data/2.5';
const API_KEY = '1855f775ccc6226f29eb4d10d9327fc0';


const defaultParams = {
    appid: API_KEY,
    units: 'metric',
};

export const getUrl = (endpoint, params = {}) => {
    const url = new URL(`${API_URL}/${endpoint}`);

    url.search = new URLSearchParams({
        ...defaultParams,
        ...params,
    });

    return url;
};
