import React from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toJS from '../hoc/toJS';
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


LocationContainer.propTypes = {
    data: object,
    fetchWeather: func.isRequired,
};

export default connect(mapStateToProp, mapDispatchToProps)(toJS(LocationContainer));

