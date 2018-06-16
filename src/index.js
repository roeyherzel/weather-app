import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import 'semantic-ui-css/semantic.min.css';

import App from './App';

import reducers from './state/ducks';


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'),
);
