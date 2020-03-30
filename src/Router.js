import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/SignIn'
import SignUp from './pages/SignUp'

export const routes = {
    home: '/',
    signIn: '/signIn',
    signUp: '/signUp',
}

export const Router = () => {
    return (
      <BrowserRouter>
          <Switch>
              <Route exact path={routes.home} component={Home} />
              <Route exact path={routes.signIn} component={Login} />
              <Route exact path={routes.signUp} component={SignUp} />
          </Switch>
      </BrowserRouter>
    )
}


export default Router;
