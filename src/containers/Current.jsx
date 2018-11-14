import {
    setPropTypes,
    compose,
    branch,
    renderNothing,
    lifecycle,
    withState,
    withHandlers,
    mapProps,
    getContext,
} from 'recompose';
import { number, oneOf } from 'prop-types';
import moment from 'moment-timezone';
import api from '../api';

import Current from '../components/Current';


const withFetchHandler = withHandlers({
    handleFetch: ({
        setLoading,
        setData,
        cityID,
        units,
    }) => async () => {
        setLoading(true);
        const data = await api.getCityWeather({ id: cityID, units });
        setData(data);
        setLoading(false);
    },
});

const withLifecycle = lifecycle({
    componentDidMount() {
        this.props.handleFetch();
    },

    componentDidUpdate(prevProps) {
        if (this.props.units !== prevProps.units) {
            this.props.handleFetch();
        }
    },
});

const withLoadingState = withState('isLoading', 'setLoading', true);
const withDataState = withState('data', 'setData', null);

const withLoadingBranch = branch(
    ({ isLoading }) => isLoading,
    renderNothing,
);

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
    setPropTypes({
        // TODO: take data prop to save from fetching again when adding from search
        cityID: number.isRequired,
    }),
    getContext({
        units: oneOf(['metric', 'imperial']),
    }),
    withLoadingState,
    withDataState,
    withFetchHandler,
    withLifecycle,
    withLoadingBranch,
    withMappedProps,
)(Current);
