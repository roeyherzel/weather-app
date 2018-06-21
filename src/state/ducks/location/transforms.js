import moment from 'moment';
import { transformIcon } from '../../../weather-icons';


export const transformWeather = (data) => {

    const {
        dt,
        name: city,
        clouds: {
            all: clouds,
        },
        main: {
            humidity,
            temp,
            temp_max,
            temp_min,
        },
        wind,
        sys: {
            country,
            sunrise,
            sunset,
        },
        weather,
    } = data;

    const { id, icon, description } = weather[0];

    wind.speed = parseInt(wind.speed);
    wind.deg = parseInt(wind.deg);

    return {
        dt: moment.unix(dt),
        sunrise: moment.unix(sunrise),
        sunset: moment.unix(sunset),
        city,
        country,
        clouds,
        humidity,
        wind,
        temp: parseInt(temp),
        temp_max: parseInt(temp_max),
        temp_min: parseInt(temp_min),
        weather: description,
        icon: transformIcon(id, icon),
    };
};
