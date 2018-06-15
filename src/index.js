import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import App from './App';

import reducer from './state/reducers/weather';

const store = createStore(reducer, devToolsEnhancer());


render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);