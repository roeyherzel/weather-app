import moment from 'moment-timezone';
import tzlookup from 'tz-lookup';


const transformIcon = ({ id, icon }) => {
    if (icon.endsWith('n')) {
        return `night-${id}`;
    }
    if (icon.endsWith('d')) {
        return `day-${id}`;
    }
    return id;
};

export const transformCurrentWeather = ({
    id: cityID,
    name: city,
    dt,
    weather,
    coord,
    sys: {
        country,
    },
    main: {
        temp,
    },
}) => {
    const {
        id, icon, main, description,
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
        temp: Math.round(temp),
        tz,
        dt: moment.unix(dt).tz(tz), // timestamp
        icon: transformIcon({ id, icon }),
    });
};

export const transformError = ({
    response: { data, status, statusText },
}) => (data
    ? `Error: ${data.message} (${data.cod})`
    : `Error: ${statusText} (${status})`);
