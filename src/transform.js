import moment from 'moment';


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
    sys: {
        country,
    },
}) => {
    const {
        id, icon, main, description,
    } = weather[0];
    return ({
        city,
        cityID,
        country,
        main,
        description,
        dt: moment.unix(dt),
        icon: transformIcon({ id, icon }),
    });
};
