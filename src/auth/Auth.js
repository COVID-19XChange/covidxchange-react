import CircularProgress from '@material-ui/core/CircularProgress'
import app from '../firebase'
import React, { useEffect, useState } from 'react'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
            setIsPending(false);
        })
    }, [])

    if (isPending) {
        return (
          <CircularProgress infinite/>
        )
    }

    return (
      <AuthContext.Provider
        value={{
            currentUser,
        }}
      >
          {children}
      </AuthContext.Provider>
    )
}
