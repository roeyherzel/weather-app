import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../state/ducks/location/operations';
import Location from '../components/Location';


class LocationContainer extends React.Component {

    componentWillMount() {
        this.props.fetchWeather();
    }

    render() {
        return this.props.data
            ? <Location {...this.props.data} />
            : null;
    }
}

const mapStateToProp = state => ({
    data: state.get('location').get('data'),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchWeather,
}, dispatch);

export default connect(mapStateToProp, mapDispatchToProps)(LocationContainer);

