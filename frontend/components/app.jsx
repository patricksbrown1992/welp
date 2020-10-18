import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SplashForm from './splash/splashForm';
import SignUpForm from './signUp/signUpForm';



const App = () => (

    <>
        <Switch>
            <Route exact path='/' component={SplashForm} />
            <Route path='/signup' component={SignUpForm} />
        </Switch>
    </>


)
export default App;