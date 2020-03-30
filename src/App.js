import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider } from '@material-ui/core/styles';
import Router from './routes/Router'

const App = () => {
    return (
      <StylesProvider injectFirst>
          <CssBaseline/>
          <Router/>
      </StylesProvider>
    )
}

export default App;
