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
        tz,
        dt: moment.unix(dt).tz(tz), // timestamp
        icon: transformIcon({ id, icon }),
    });
};
