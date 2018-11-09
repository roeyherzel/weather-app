import {
    setPropTypes,
    compose,
    branch,
    renderNothing,
    lifecycle,
    withState,
} from 'recompose';
import { number } from 'prop-types';
import { getCityWeather } from '../api';

import Current from '../components/Current';

// TODO: take data prop to save from fetching again when adding from search
const withPropTypes = setPropTypes({
    cityID: number.isRequired,
});

const withLifecycle = lifecycle({
    async componentDidMount() {
        const { setLoading, setData, cityID } = this.props;
        const data = await getCityWeather(cityID);
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
    withPropTypes,
    withLoadingState,
    withDataState,
    withLifecycle,
    withLoadingBranch,
)(Current);
