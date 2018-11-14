import {
    compose,
    lifecycle,
    withState,
    withHandlers,
    setDisplayName,
} from 'recompose';

import api from '../api';

import ShowCities from '../components/ShowCities';


const withLoadingState = withState('isLoading', 'setLoading', true);
const withCitiesState = withState('cities', 'setCitiesData', null);

const withFetchCities = compose(
    setDisplayName('withFetchCities'),

    withHandlers({
        handleFetch: ({
            setLoading,
            setCitiesData,
            myCities,
            units,
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
    }),

    lifecycle({
        componentDidMount() {
            this.props.handleFetch();
        },

        componentDidUpdate(prevProps) {
            if (this.props.units !== prevProps.units) {
                this.props.handleFetch();
            }
        },
    }),
);

export default compose(
    withLoadingState,
    withCitiesState,
    withFetchCities,
)(ShowCities);
