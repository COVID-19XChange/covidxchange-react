import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const routes = {
    home: '/',
    login: '/login',
    signUp: '/signUp',
}

export const Router = () => {
    return (
      <BrowserRouter>
          <Switch>
              <Route exact path={routes.home} component={Home} />
              <Route exact path={routes.login} component={Login} />
              <Route exact path={routes.signUp} component={SignUp} />
          </Switch>
      </BrowserRouter>
    )
}


export default Router;
