import {
    setPropTypes,
    compose,
    mapProps,
    getContext,
} from 'recompose';
import { number, shape, string } from 'prop-types';
import moment from 'moment-timezone';

import CardHeader from '../components/CardHeader';


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
        data: {
            ...data,
            dt: moment(timestamp).tz(tz),
            isDayTime: moment(timestamp).tz(tz).isBetween(sunrise, sunset),
        },
    })),
)(CardHeader);
