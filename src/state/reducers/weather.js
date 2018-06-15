import example from '../../zipcode_97219.json';

const weather = (state = example, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default weather;