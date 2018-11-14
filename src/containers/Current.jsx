import {
    setPropTypes,
    compose,
    mapProps,
    getContext,
} from 'recompose';
import { number, shape, string } from 'prop-types';
import moment from 'moment-timezone';

import Current from '../components/Current';


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
        data: { tz, ...data },
    }) => ({
        data: {
            ...data,
            dt: moment(timestamp).tz(tz),
        },
    })),
)(Current);
