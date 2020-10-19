import {connect} from 'react-redux';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { signup, login, clearErrors } from '../../actions/sessionActions';


const msp = (state) => ({
    errors: state.errors
});

const mdp = (dispatch) => ({
    signup: (user) => dispatch(signup(user)), 
    login: (user) => dispatch(login(user)), 
    clearErrors: () => dispatch(clearErrors())
});


const SignUpForm = (props) => {
    
    const [firstName, updateFirstName] = useState(() => {
        return '';
    })

    const [lastName, updateLastName] = useState(() => {
        return '';
    })

    const [email, updateEmail] = useState(() => {
        return '';
    })

    const [password, updatePassword] = useState(() => {
        return '';
    })

    function handleChangePassword(e) {
        e.preventDefault();
        updatePassword(e.target.value)
    }

    function handleChangeEmail(e) {
        e.preventDefault();
        updateEmail(e.target.value)
    }

    function handleChangeFirstName(e) {
        e.preventDefault();
        updateFirstName(e.target.value)
    }

    function handleChangeLastName(e) {
        e.preventDefault();
        updateLastName(e.target.value)
    }


    function handleClick(e){
        e.preventDefault();
        props.signup({email, password, "First Name": firstName, "Last Name": lastName});
        updateEmail('');
        updatePassword('');
        updateFirstName('');
        updateLastName('');
        props.clearErrors();
    }

    

    return (
            
     
        <div className='sign-up-form'>
        
            <div className ="sign-up-top double-center-row row">
                <div className='sign-up-top-div'>
                    <h1 className='title white'>Welp</h1>
                    <img src={window.red_logo} alt=""/>
                </div>

            </div>
            <div className = 'sign-up-body'>
                <div className='sign-up-body-left double-center-col'>
                    <div className="sign-up-middle">
                        
                        <div className='sign-up-name-inputs'>
                            <input type="text" name="firstName" value={firstName} placeholder='First Name' onChange={handleChangeFirstName}/>
                            <input type="text" name="lastName" value={lastName} placeholder='Last Name' onChange={handleChangeLastName}/>
                        </div>
                        <div className="sign-up-inputs double-center-col">

                            <input className="sign-up-email" type="text" value={email} placeholder='Email' onChange={handleChangeEmail} />
                            <input className = "sign-up-password" type="password" placeholder='Password' value={password} onChange={handleChangePassword}/>
                        </div>
                        <ul>
                            <br/>
                            {props.errors.length ? props.errors.map((error, idx) => {
                                return <li className='error' key={error}>{error}</li>
                            }) : ''}
                            <br/>
                        </ul>
                    

                        <button onClick={handleClick}>Sign Up</button>
                    </div>  
                    <div className="sign-up-bottom">
                        <h3>Already on Welp?</h3>
                        <Link to='/login'>Sign In</Link>
                    </div>
                </div>
                <div className="sign-up-body-right double-center-row">
                    <img src={window.sign_up_right_photo} alt="Photo of front of business"/>
                </div>
                
            </div>
            



                
        </div>
       
    
    );
}

 



export default connect(msp, mdp)(SignUpForm);


