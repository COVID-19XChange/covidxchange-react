import React, { useState } from 'react'
import firebase from 'firebase';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Link, useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { routes } from '../../Router'
import PageNameGridItem from './PageNameGridItem';

export default function SignUp() {
    const [ form, setForm ] = useState({});
    const history = useHistory();

    const isPasswordValid = () => form.password === form['repeat-password'];

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!isPasswordValid()){
            alert("Password didn't match.")
            return;
        }

        const { email, password } = form;

        try{
            await firebase.auth().createUserWithEmailAndPassword(email, password)
            history.push(routes.signIn)
        } catch (exception) {
            switch(exception.code){
                case "auth/weak-password":
                    alert(exception.message);
                    break;
                default:
                    alert("SignUp error, please check the fields and try again");
                    console.error(exception);
                    break;
            }
        }

        console.log(form);
    }

    const handleFormUpdate = (event) => {
        const { name, value } = event.target;

        setForm({ ...form, [name]: value })
    }

    return (
      <Container maxWidth="xs">
          <PageNameGridItem item spacing={2}>
              <Typography component="h1" variant="h5" align={'center'}>
                  Sign up
              </Typography>
          </PageNameGridItem>
          <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                      <TextField
                        onChange={handleFormUpdate}
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField
                        onChange={handleFormUpdate}
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                        onChange={handleFormUpdate}
                        variant="outlined"
                        required
                        type="email"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                        onChange={handleFormUpdate}
                        variant="outlined"
                        required
                        fullWidth
                        inputProps={{ min: 6 }}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                        onChange={handleFormUpdate}
                        variant="outlined"
                        required
                        fullWidth
                        name="repeat-password"
                        label="Confirm Password"
                        type="password"
                        id="repeat-password"
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <Button type="submit" fullWidth variant="contained" color="primary">
                          Sign Up
                      </Button>
                  </Grid>
                  <Grid item>
                      <Link to={routes.signIn} variant="body2">
                          Already have an account? Sign in
                      </Link>
                  </Grid>
              </Grid>
          </form>
      </Container>
    )
}
