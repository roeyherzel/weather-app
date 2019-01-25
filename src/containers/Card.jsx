import {
    setPropTypes,
    compose,
    mapProps,
    getContext,
} from 'recompose';
import { number, shape, string } from 'prop-types';
import moment from 'moment-timezone';

import Card from '../components/Card';


export default compose(
    setPropTypes({
        data: shape({
            tz: string.isRequired,
        }).isRequired,
    }),
    getContext({
        timestamp: number.isRequired,
    }),
    mapProps(({
        timestamp,
        data: {
            tz,
            sunrise,
            sunset,
            ...data
        },
    }) => ({
        ...data,
        dt: moment(timestamp).tz(tz),
        isDayTime: moment(timestamp).tz(tz).isBetween(sunrise, sunset),
    })),
)(Card);
