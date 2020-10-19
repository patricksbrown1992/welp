import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SplashForm from './splash/splashForm';
import SignUpForm from './signUp/signUpForm';
import LogInForm from './logIn/logInForm';
import { Authorized, ProtectedRoute } from '../util/routeUtil';
import ReviewsForm from './reviews/reviewsForm';



const App = () => (

    <>
        <Switch>
            <Route exact path='/' component={SplashForm} />
            <Authorized path='/signup' component={SignUpForm} />
            <Authorized path='/login' component={LogInForm}/>
            <ProtectedRoute path='/reviews' component={ReviewsForm}/>
        </Switch>
    </>


)
export default App;