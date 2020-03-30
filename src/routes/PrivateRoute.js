import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { routes } from './Router'
import { AuthContext } from '../auth/Auth'

export const PrivateRoute = (props) => {
    const { component, ...rest } = props;

    const { currentUser } = useContext(AuthContext);
    let RenderedComponent = () => (<Redirect to={routes.signIn} />);

    if (!!currentUser) {
        RenderedComponent = props.component
    }

    return (<Route {...rest} render={RenderedComponent} />)
}
