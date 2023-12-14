import React, { useState } from 'react';
import { TextField } from '@mui/material';
import '../styles/Login.css'
import * as authActions from '../actions/authAction.js';
import logo from '../images/logo3_nobg.png';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {
        console.log('Username:', username);
        console.log('Password:', password);
        await authActions.login(username, password);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div className="split left">
                <div className="centered">
                    <img src={logo}/>
                </div>
            </div>
            <div className="split right">
                <div className="centered">
                    <div className='login-form'>
                        <h3 className='welcome-text'>Welcome back!</h3>

                        <div className='text-field'>
                            <TextField
                                fullWidth
                                label='username'
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
                                // type={showPassword ? 'text' : 'password'}
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

                    <button className="button" onClick={async () => { await handleLogin(); }}>
                        Login
                    </button>

                    <h4 onClick={() => { window.location.href = '/signup' }} className='nav'>New user? Signup</h4>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;