import React, { useState } from 'react'
import app from '../../firebase'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { routes } from '../../routes/Router'

export default function SignIn() {
    const [ loginData, setLoginData ] = useState({ email: '', password: '' });

    const handleLogin = async (event) => {
        event.preventDefault();

        const { email, password } = loginData;

        try {
            await app.auth().signInWithEmailAndPassword(email, password )
        } catch(exception) {
            switch(exception.code){
                default:
                    alert("SignIn failed, check the data and try again");
            }
        }
    }

    const handleFieldChange = (event) => {
        const { name, value } = event.target;

        setLoginData({ ...loginData, [name]: value });
    }

    return (
      <Container maxWidth="xs">
          <div>
              <Typography component="h1" variant="h5">
                  Sign in
              </Typography>
              <form onSubmit={handleLogin}>
                  <TextField
                    onChange={handleFieldChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    onChange={handleFieldChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                      Sign In
                  </Button>
                  <Grid container>
                      <Grid item xs>
                          <Link to={routes.signUp} variant="body2">
                              Forgot password?
                          </Link>
                      </Grid>
                      <Grid item>
                          <Link to={routes.signUp} variant="body2">
                              Don't have an account? Sign Up
                          </Link>
                      </Grid>
                  </Grid>
              </form>
          </div>
      </Container>
    );
}
