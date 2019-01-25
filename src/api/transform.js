import moment from 'moment-timezone';
import tzlookup from 'tz-lookup';


const getIconPeriod = (icon) => {
    if (icon.endsWith('n')) return 'night';
    if (icon.endsWith('d')) return 'day';
    return null;
};

export const transformCurrentWeather = ({
    id: cityID,
    name: city,
    dt,
    weather,
    coord,
    sys: {
        country,
        sunrise,
        sunset,
    },
    main: {
        temp,
    },
}) => {
    const {
        id: iconID,
        main,
        description,
    } = weather[0];

    const { lat, lon } = coord;
    const tz = tzlookup(lat, lon);

    return ({
        city,
        cityID,
        country,
        coord,
        main,
        description,
        iconID,
        temp: Math.round(temp),
        tz,
        lastUpdate: moment.unix(dt).tz(tz), // timestamp
        sunrise: moment.unix(sunrise).tz(tz),
        sunset: moment.unix(sunset).tz(tz),
    });
};

export const transformError = ({
    response: { data, status, statusText },
}) => (data
    ? `Error: ${data.message} (${data.cod})`
    : `Error: ${statusText} (${status})`);
