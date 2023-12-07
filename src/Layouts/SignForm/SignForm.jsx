// SignInForm.js
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// components
import Checkbox from '../../components/Checkbox/Checkbox';
import Button from '../../components/button/Button';
// style
import './signForm.css'

const SignForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/user");
        // logique de connexion
        console.log('Sign form click');
    };

    return (
        <form className='sign-in'>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <Checkbox id="remember-me" label="Remember me" />
            <Button className="sign-in-button comp-button" text="Sign In" onClick={handleSignIn} />
        </form>
    );
};

export default SignForm;
