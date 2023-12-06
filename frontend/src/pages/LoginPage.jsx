// import React, { useEffect, useState } from 'react';

// const LoginPage = () => {

//     const [isSignIn, setIsSignIn] = useState(true);
//     const [userName, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     useEffect(() => {
//         const container = document.getElementById('container');
//         if (container) {
//             setTimeout(() => {
//                 container.classList.add('sign-in');
//             }, 200);
//         }
//     }, []);

//     const toggle = () => {
//         const container = document.getElementById('container');
//         if (container) {
//             container.classList.toggle('sign-in');
//             container.classList.toggle('sign-up');
//             setIsSignIn(!isSignIn);
//         }
//     };

//     const handleUserNameChange = (e) => {
//         setUsername(e.target.value);
//     };

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleConfirmPasswordChange = (e) => {
//         setConfirmPassword(e.target.value);
//     };

//     const handleSignUp = () => {
//         console.log('Username:', userName);
//         console.log('Email:', email);
//         console.log('Password:', password);
//         console.log('Confirm Password:', confirmPassword);
//     };

//     const handleSignIn = () => {
//         console.log('Username:', userName);
//         console.log('Password:', password);
//     };

//     return (
//         <div id="container" className="container">
//             <div className={`row ${isSignIn ? 'sign-in' : 'sign-up'}`}>
//                 <div class="col align-items-center flex-col sign-up">
//                     <div class="form-wrapper align-items-center">
//                         <div class="form sign-up">
//                             <div class="input-group">
//                                 <i class='bx bxs-user'></i>
//                                 <input type="text" placeholder="Username" value={userName} onChange={handleUserNameChange} />
//                             </div>
//                             <div class="input-group">
//                                 <i class='bx bx-mail-send'></i>
//                                 <input type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
//                             </div>
//                             <div class="input-group">
//                                 <i class='bx bxs-lock-alt'></i>
//                                 <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
//                             </div>
//                             <div class="input-group">
//                                 <i class='bx bxs-lock-alt'></i>
//                                 <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
//                             </div>
//                             <button>
//                                 Sign up
//                             </button>
//                             <p>
//                                 <span>{!isSignIn ? 'Already have an account?' : "Don't have an account?"}</span>
//                                 <b onClick={toggle} className="pointer">
//                                     {!isSignIn ? 'Sign in here' : 'Sign up here'}
//                                 </b>
//                             </p>
//                         </div>
//                     </div>

//                 </div>
//                 <div class="col align-items-center flex-col sign-in">
//                     <div class="form-wrapper align-items-center">
//                         <div class="form sign-in">
//                             <div class="input-group">
//                                 <i class='bx bxs-user'></i>
//                                 <input type="text" placeholder="Username" value={userName} onChange={handleUserNameChange}/>
//                             </div>
//                             <div class="input-group">
//                                 <i class='bx bxs-lock-alt'></i>
//                                 <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
//                             </div>
//                             <button>
//                                 Sign in
//                             </button>
//                             <p>
//                                 <b>
//                                     Forgot password?
//                                 </b>
//                             </p>
//                             <p>
//                                 <span>{!isSignIn ? 'Already have an account?' : "Don't have an account?"}</span>
//                                 <b onClick={toggle} className="pointer">
//                                     {!isSignIn ? 'Sign in here' : 'Sign up here'}
//                                 </b>
//                             </p>
//                         </div>
//                     </div>
//                     <div class="form-wrapper">

//                     </div>
//                 </div>
//             </div>
//             <div class="row content-row">
//                 <div class="col align-items-center flex-col">
//                     <div class="text sign-in">
//                         <h2>
//                             Welcome
//                         </h2>

//                     </div>
//                     <div class="img sign-in">

//                     </div>
//                 </div>
//                 <div class="col align-items-center flex-col">
//                     <div class="img sign-up">

//                     </div>
//                     <div class="text sign-up">
//                         <h2>
//                             Join with us
//                         </h2>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;


import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { TextField } from '@mui/material'
import '../styles/Login.css'
import * as authActions from '../actions/authAction.js';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        console.log('Username:', username);
        console.log('Password:', password);
        await authActions.login(username,password);
    };

    return (
        <div>
            <div className="split left">
                <div className="centered">
                    <img src={require('../images/logo1.png')} />
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
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                  }}
                                InputProps={{
                                    style: {
                                        borderRadius: "10px"
                                    }
                                }}
                            />
                        </div>

                        {/* <input
                            type="username"
                            placeholder="username"
                            value="username"
                            // onChange={(e) => this.setState({ username: e.target.value })}
                            style={{ padding: "10px", marginBottom: "15px", borderRadius: "10px", fontSize: "16px" }}
                        /> */}
                    </div>

                    <button className="button" onClick={async () => {await handleLogin();}}>
                        Login
                    </button>

                    <NavLink to="/signup">
                        <h4 fontSize="1.5rem">New user? Signup</h4>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;