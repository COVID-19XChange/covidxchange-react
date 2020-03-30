import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider } from '@material-ui/core/styles';

import React from 'react';

import Router from './Router'

const App = () => (
    <StylesProvider injectFirst>
        <CssBaseline />
        <Router/>
    </StylesProvider>
)

export default App;
