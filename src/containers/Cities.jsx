import {
    branch,
    compose,
    lifecycle,
    withState,
    withHandlers,
    setPropTypes,
    renderComponent,
} from 'recompose';
import { arrayOf, number, oneOf } from 'prop-types';

import api from '../api';
import Cities from '../components/Cities';
import Spinner from '../components/Spinner';


const withLoadingState = withState('isLoading', 'setLoading', true);

const withFetchHandler = withHandlers({
    fetchWeather: ({
        units,
        myCities,
        setLoading,
        setCitiesData,
    }) => async () => {

        setLoading(true);

        try {
            const data = await api.getGroup({ id: myCities.join(','), units });
            setCitiesData(data);
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    },
});

const withLifecycle = lifecycle({
    componentDidMount() {
        this.props.fetchWeather();
    },

    componentDidUpdate(prevProps) {
        if (this.props.units !== prevProps.units) {
            this.props.fetchWeather();
        }
    },
});

const withLoadingSpinner = branch(
    ({ isLoading }) => isLoading,
    renderComponent(Spinner),
);

export default compose(
    setPropTypes({
        myCities: arrayOf(number).isRequired,
        units: oneOf(['metric', 'imperial']).isRequired,
    }),
    withLoadingState,
    withFetchHandler,
    withLifecycle,
    withLoadingSpinner,
)(Cities);
