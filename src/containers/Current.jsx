import axios from 'axios';
import {
    compose,
    branch,
    renderNothing,
    lifecycle,
    withState,
} from 'recompose';

import { transformCurrentWeather } from '../transform';

import Current from '../components/Current';


const API_URL = 'http://api.openweathermap.org/data/2.5';
const API_KEY = '1855f775ccc6226f29eb4d10d9327fc0';

const params = {
    appid: API_KEY,
    units: 'metric',
    zip: '97219,us',
};

async function getCurrentWeather() {
    try {
        const { data } = await axios.get(`${API_URL}/weather`, { params });
        return transformCurrentWeather(data);
    } catch (error) {
        console.error(error); // eslint-disable-line no-console
    }
}

const withLifecycle = lifecycle({
    async componentDidMount() {
        const { setLoading, setData } = this.props;
        const data = await getCurrentWeather();
        setData(data);
        setLoading(false);
    },
});

const withLoadingState = withState('isLoading', 'setLoading', true);

const withDataState = withState('data', 'setData', null);

const withLoadingBranch = branch(
    ({ isLoading }) => isLoading,
    renderNothing,
);

export default compose(
    withLoadingState,
    withDataState,
    withLifecycle,
    withLoadingBranch,
)(Current);
