import {
    setPropTypes,
    compose,
    branch,
    renderNothing,
    lifecycle,
    withState,
    mapProps,
    getContext,
} from 'recompose';
import { number } from 'prop-types';
import moment from 'moment-timezone';
import api from '../api';

import Current from '../components/Current';


// TODO: take data prop to save from fetching again when adding from search
const withPropTypes = setPropTypes({
    cityID: number.isRequired,
});

const withLifecycle = lifecycle({
    async componentDidMount() {
        const { setLoading, setData, cityID } = this.props;
        const data = await api.getCityWeather(cityID);
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

const withWeatherContext = getContext({ timestamp: number });

const withMappedProps = mapProps(({
    timestamp,
    data: { tz, ...data },
}) => ({
    data: {
        ...data,
        dt: moment(timestamp).tz(tz),
    },
}));

export default compose(
    withPropTypes,
    withLoadingState,
    withDataState,
    withWeatherContext,
    withLifecycle,
    withLoadingBranch,
    withMappedProps,
)(Current);
