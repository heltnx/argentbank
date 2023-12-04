// SignInForm.js
import React from 'react';
import { Link } from 'react-router-dom';
// components
import Input from '../../components/Input/Input';
import Checkbox from '../../components/Checkbox/Checkbox';
import Button from '../../components/button/Button';
// style
import './signForm.css'

const SignForm = () => {
    const handleSignIn = () => {
        // logique de connexion ici
        console.log('Sign form click');
    };

    return (
        <form className='sign-in'>
            <Input type="text" id="username" label="Username" />
            <Input type="password" id="password" label="Password" />
            <Checkbox id="remember-me" label="Remember me" />
            <Link to="/User" className='sign-in-button'>
                <Button className="comp-button" text="Edit Name" onClick={handleSignIn} />
            </Link>

        </form>
    );
};
export default SignForm;
