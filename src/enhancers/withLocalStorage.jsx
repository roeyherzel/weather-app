import { lifecycle, compose, setDisplayName } from 'recompose';


const storage_name = 'app';

export const getStorage = () => new Map(JSON.parse(localStorage.getItem(storage_name)));

const setStorage = storage => localStorage.setItem(storage_name, JSON.stringify(storage));

const enhance = (...storage_props) => compose(
    setDisplayName('withLocalStorage'),
    lifecycle({
        componentDidMount() {
            const storage = getStorage();

            storage_props.forEach((i) => {
                if (!storage.get(i)) {
                    storage.set(i, this.props[i]);
                }
            });

            setStorage(storage);
        },
        componentDidUpdate(prevProps) {
            let shouldUpdate = false;
            const storage = getStorage();

            storage_props.forEach((i) => {
                if (this.props[i] !== prevProps[i]) {
                    storage.set(i, this.props[i]);
                    shouldUpdate = true;
                }
            });

            if (shouldUpdate) {
                setStorage(storage);
            }
        },
    }),
);

export default enhance;
