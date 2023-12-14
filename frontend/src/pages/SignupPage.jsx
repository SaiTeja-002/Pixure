import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { TextField } from '@mui/material'
import '../styles/Login.css'
import * as authActions from '../actions/authAction.js';
import logo from '../images/logo3_nobg.png';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        console.log('Email:', email);
        console.log('Username:', username);
        console.log('Password:', password);

        await authActions.signup(email, username, password);
    };

    return (
        <div>
            <div className="split left">
                <div className="centered">
                <img src={logo} />
                </div>
            </div>
            <div className="split right">
                <div className="centered">
                    <div className='login-form'>
                        <h3 className='welcome-text'>Welcome to Pixure</h3>

                        <div className='text-field'>
                            <TextField
                                fullWidth
                                label='Email'
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                                InputProps={{
                                    style: {
                                        borderRadius: "10px"
                                    }
                                }}
                            />
                        </div>

                        <div className='text-field'>
                            <TextField
                                fullWidth
                                label='Username'
                                value={username}
                                onChange={(event) => {
                                    setUsername(event.target.value);
                                }}
                                InputProps={{
                                    style: {
                                        borderRadius: "10px"
                                    }
                                }}
                            />
                        </div>

                        <div className='text-field'>
                            <TextField
                                fullWidth
                                label='password'
                                type='password'
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                                InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                    },
                                }}
                            />
                        </div>
                    </div>

                    <button className="button" onClick={async () => { await handleSignup() }}>
                        Signup
                    </button>

                    <h4 onClick={() => { window.location.href = '/login' }} className='nav'>Already have an account? Login</h4>

                </div>
            </div>
        </div>
    );
}

export default SignupPage;