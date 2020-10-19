import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SplashForm from './splash/splashForm';
import SignUpForm from './signUp/signUpForm';
import LogInForm from './logIn/logInForm';



const App = () => (

    <>
        <Switch>
            <Route exact path='/' component={SplashForm} />
            <Route path='/signup' component={SignUpForm} />
            <Route path='/login' component={LogInForm}/>
        </Switch>
    </>


)
export default App;