import {
    compose,
    branch,
    renderNothing,
    lifecycle,
    withState,
} from 'recompose';

import { getCityWeather } from '../api';

import Current from '../components/Current';


const withLifecycle = lifecycle({
    async componentDidMount() {
        const { setLoading, setData } = this.props;
        const data = await getCityWeather();
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
