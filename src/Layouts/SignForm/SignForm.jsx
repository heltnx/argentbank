// SignInForm.js
import React from 'react';
import Input from '../../components/Checkbox/Checkbox';
import Checkbox from '../../components/Checkbox/Checkbox';
import Button from '../../components/button/Button';

const SignForm = () => {
    const handleSignIn = () => {
        // Gérer la logique de connexion ici
        console.log('Sign In clicked');
    };

    return (
        <form>
            <Input type="text" id="username" label="Username" />
            <Input type="password" id="password" label="Password" />
            <Checkbox id="remember-me" label="Remember me" />
            <Button text="Sign In" onClick={handleSignIn} />
        </form>
    );
};

export default SignForm;
