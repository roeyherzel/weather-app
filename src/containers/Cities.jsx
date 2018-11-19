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

const withCitiesState = withState('cities', 'setCities', null);

const withFetchHandler = withHandlers({
    handleFetch: ({
        setLoading,
        setCities,
        myCities,
        units,
    }) => async () => {

        setLoading(true);

        try {
            const data = await api.getGroup({ id: myCities.join(','), units });
            setCities(data);
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
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
    withCitiesState,
    withFetchHandler,
    withLifecycle,
    withLoadingSpinner,
)(Cities);
