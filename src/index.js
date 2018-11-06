import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { ThemeProvider } from 'styled-components';

import 'semantic-ui-css/semantic.min.css';
import theme from './styles/theme';

import App from './App';

import reducers from './state/ducks';


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
);
