import React, { useEffect, useState } from 'react';

const LoginPage = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        const container = document.getElementById('container');
        if (container) {
            setTimeout(() => {
                container.classList.add('sign-in');
            }, 200);
        }
    }, []);

    const toggle = () => {
        const container = document.getElementById('container');
        if (container) {
            container.classList.toggle('sign-in');
            container.classList.toggle('sign-up');
            setIsSignIn(!isSignIn);
        }
    };

    const handleUserNameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSignUp = () => {
        console.log('Username:', userName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    const handleSignIn = () => {
        console.log('Username:', userName);
        console.log('Password:', password);
    };

    return (
        <div id="container" className="container">
            <div className={`row ${isSignIn ? 'sign-in' : 'sign-up'}`}>
                <div class="col align-items-center flex-col sign-up">
                    <div class="form-wrapper align-items-center">
                        <div class="form sign-up">
                            <div class="input-group">
                                <i class='bx bxs-user'></i>
                                <input type="text" placeholder="Username" value={userName} onChange={handleUserNameChange} />
                            </div>
                            <div class="input-group">
                                <i class='bx bx-mail-send'></i>
                                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
                            </div>
                            <div class="input-group">
                                <i class='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                            </div>
                            <div class="input-group">
                                <i class='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                            </div>
                            <button>
                                Sign up
                            </button>
                            <p>
                                <span>{!isSignIn ? 'Already have an account?' : "Don't have an account?"}</span>
                                <b onClick={toggle} className="pointer">
                                    {!isSignIn ? 'Sign in here' : 'Sign up here'}
                                </b>
                            </p>
                        </div>
                    </div>

                </div>
                <div class="col align-items-center flex-col sign-in">
                    <div class="form-wrapper align-items-center">
                        <div class="form sign-in">
                            <div class="input-group">
                                <i class='bx bxs-user'></i>
                                <input type="text" placeholder="Username" value={userName} onChange={handleUserNameChange}/>
                            </div>
                            <div class="input-group">
                                <i class='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                            </div>
                            <button>
                                Sign in
                            </button>
                            <p>
                                <b>
                                    Forgot password?
                                </b>
                            </p>
                            <p>
                                <span>{!isSignIn ? 'Already have an account?' : "Don't have an account?"}</span>
                                <b onClick={toggle} className="pointer">
                                    {!isSignIn ? 'Sign in here' : 'Sign up here'}
                                </b>
                            </p>
                        </div>
                    </div>
                    <div class="form-wrapper">

                    </div>
                </div>
            </div>
            <div class="row content-row">
                <div class="col align-items-center flex-col">
                    <div class="text sign-in">
                        <h2>
                            Welcome
                        </h2>

                    </div>
                    <div class="img sign-in">

                    </div>
                </div>
                <div class="col align-items-center flex-col">
                    <div class="img sign-up">

                    </div>
                    <div class="text sign-up">
                        <h2>
                            Join with us
                        </h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
