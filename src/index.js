import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import 'semantic-ui-css/semantic.min.css';
import theme from './styleUtils/theme';

import App from './App';


render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root'),
);
