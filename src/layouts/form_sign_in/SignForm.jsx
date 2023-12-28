import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../../components/checkbox/Checkbox';
import Button from '../../components/button/Button';
import './signForm.css';
import { useLoginMutation, useGetProfileMutation } from '../../services/user';
import { useUserActions } from '../../features/user/userActions';

const SignForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginMutation, { isError }] = useLoginMutation();
    const [getProfileMutation] = useGetProfileMutation();
    const navigate = useNavigate();

    // instance de useUserActions
    const { setUser } = useUserActions();

    const handleSignIn = async (e) => {
        e.preventDefault();

        const response = await loginMutation({
            email: email,
            password: password,
        });

        if (response.data?.body) {
            const token = response.data.body.token;

            localStorage.setItem("token", token);

            const profile = await getProfileMutation(`Bearer ${token}`);

            if (profile.data?.body) {
                // "setUser" de "useUserActions" au lieu de dispatch(setUser())
                setUser(profile.data.body);

                navigate("/user");
            } else {
                console.error("La réponse du profil est invalide.", response);
            }
        } else {
            console.error("La réponse de la requête est invalide.", response);
        }

        setEmail("");
        setPassword("");
    };

    return (
        <form className='sign-in'>
            <div className="input-wrapper">
                <label htmlFor="username">User name</label>
                <input
                    type="text"
                    id="username"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </div>
            <Checkbox id="remember-me" label="Remember me" />
            <Button className="sign-in-button comp-button" text="Sign In" onClick={handleSignIn} />
            {isError ? <p className='error'>Identifant ou mot de passe erroné</p> : ""}
        </form>
    );
};

export default SignForm;
