import {connect} from 'react-redux';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { signup, login, clearErrors, logout } from '../../actions/sessionActions';

const msp = (state) => ({
    errors: state.errors
});

const mdp = (dispatch) => ({
    signup: (user) => dispatch(signup(user)), 
    login: (user) => dispatch(login(user)), 
    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout())
});

const ReviewsForm = (props) => {
 
    return (
        <div >
            <button onClick={props.logout}>Howdy</button>
           
        </div>
    )
}


export default connect(msp, mdp)(ReviewsForm);