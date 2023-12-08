import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useGetProfileMutation } from '../../services/user';
// components
import Checkbox from '../../components/Checkbox/Checkbox';
import Button from '../../components/button/Button';
// style
import './signForm.css'
//
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/user/userSlice';

const SignForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginMutation, { isError }] = useLoginMutation();
    const [getProfileMutation] = useGetProfileMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        const response = await loginMutation({
            email: email,
            password: password,
        });
        if (response.data !== undefined && response.data.body !== undefined) {
            const token = response.data.body.token;
            localStorage.setItem("token", token);

            const profile = await getProfileMutation(`Bearer ${token}`);

            // condition "profile.data.body" est défini avant de l'utiliser
            if (profile.data !== undefined && profile.data.body !== undefined) {
                dispatch(setUser(profile.data.body));
                navigate("/user");
            } else {
                // Gérer le cas où profile.data.body est undefined
                console.error("La réponse du profil est invalide.", profile);
            }
        } else {
            // Gérer le cas où response.data.body est undefined
            console.error("La réponse de la requête est invalide.", response);
        }

        setEmail("");
        setPassword("");

    };

    return (
        <form className='sign-in'>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
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
