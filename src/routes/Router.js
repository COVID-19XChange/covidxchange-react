import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuthProvider } from '../auth/Auth'
import CMap from '../pages/CMap'
import Home from '../pages/Home'
import Login from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import { PrivateRoute } from './PrivateRoute'

export const routes = {
    home: '/',
    signIn: '/signIn',
    signUp: '/signUp',
    donateMap: '/map/donate',
    needMap: '/map/need',
    allMap: '/map/all',
}

export const Router = () => {
    return (
      <AuthProvider>
          <BrowserRouter>
              <Switch>
                  <Route exact path={routes.home} component={Home}/>
                  <Route exact path={routes.signIn} component={Login}/>
                  <Route exact path={routes.signUp} component={SignUp}/>
                  <PrivateRoute exact path={routes.donateMap} component={CMap}/>
                  <PrivateRoute exact path={routes.needMap} component={CMap}/>
                  <PrivateRoute exact path={routes.allMap} component={CMap}/>
              </Switch>
          </BrowserRouter>
      </AuthProvider>
    )
}


export default Router
