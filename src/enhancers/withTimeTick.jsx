import {
    compose,
    lifecycle,
    withStateHandlers,
    setDisplayName,
} from 'recompose';


const withTimeTick = compose(
    setDisplayName('withTimeTick'),

    withStateHandlers({
        timestamp: Date.now(),
        intervalID: null,
    }, {
        setTimestamp: () => () => ({ timestamp: Date.now() }),
        setIntervalID: () => intervalID => ({ intervalID }),
    }),

    lifecycle({
        componentDidMount() {
            const { setTimestamp, setIntervalID } = this.props;
            setIntervalID(setInterval(setTimestamp, 60 * 1000));
        },
        componentWillUnmount() {
            clearInterval(this.props.intervalID);
        },
    }),
);

export default withTimeTick;
