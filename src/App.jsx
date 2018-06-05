import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader'


const HelloWorld = styled.h1`
    color: red;
`

const App = () => <HelloWorld>Hello, world!</HelloWorld>;

export default hot(module)(App);