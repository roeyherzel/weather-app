import axios from 'axios';
import {
    compose,
    lifecycle,
    withState,
} from 'recompose';

import Weather from '../components/Weather';


const API_URL = 'http://api.openweathermap.org/data/2.5';
const API_KEY = '1855f775ccc6226f29eb4d10d9327fc0';

const params = {
    appid: API_KEY,
    units: 'metric',
    zip: '97219,us',
};

async function getWeather() {
    try {
        const response = await axios.get(`${API_URL}/weather`, { params });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const withLifecycle = lifecycle({
    async componentDidMount() {
        const { setLoading, setData } = this.props;
        const data = await getWeather();
        setData(data);
        setLoading(false);
        console.log(data);
    },
});

const withLoadingState = withState('isLoading', 'setLoading', true);

const withDataState = withState('data', 'setData', null);

export default compose(
    withLoadingState,
    withDataState,
    withLifecycle,
)(Weather);
