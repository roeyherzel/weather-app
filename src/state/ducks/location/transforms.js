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
        rain,
        sys: {
            country,
            sunrise,
            sunset,
        },
        weather: _weather,
    } = data;

    const weather = _weather[0];
    wind.speed = parseInt(wind.speed);

    return ({
        dt,
        city,
        country,
        clouds,
        humidity,
        wind,
        rain,
        temp: parseInt(temp),
        temp_max: parseInt(temp_max),
        temp_min: parseInt(temp_min),
        weather,
        sunrise,
        sunset,
    });
};
