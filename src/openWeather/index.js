import iconMapping from './icon-mapping.json';

const API_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '1855f775ccc6226f29eb4d10d9327fc0';


const defaultParams = {
    appid: API_KEY,
    zip: '97219,us',
    units: 'metric',
};

export const getUrl = () => new URL(API_URL);

export const getUrlSearchParams = params => getUrl().search({
    ...defaultParams,
    ...params,
});

const getIconPrefix = (icon) => {
    const className = 'wi-owm';
    const match = icon.match(/\d+([d|n])$/);

    if (!match) {
        return className;
    }

    return (match[1] === 'd') ? `${className}-day` : `${className}-night`;
};


export const getWeatherIcon = (id, icon) => {
    const owm = `${getIconPrefix(icon)}-${id}`;
    const wi = iconMapping[owm];

    if (!wi) {
        console.error(`WeatherIcon not found for owm: ${owm}`);
    }

    return wi || 'na';
};
