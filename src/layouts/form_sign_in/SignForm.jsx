import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// components
import Checkbox from '../../components/checkbox/Checkbox';
import Button from '../../components/button/Button';
// style
import './signForm.css'
// REDUX
import { useLoginMutation, useGetProfileMutation } from '../../services/user';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/user/userSlice';

const SignForm = () => {
    // "useState" pour gérer email mot de passe
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // géstion des mutations de connexion et de profil
    const [loginMutation, { isError }] = useLoginMutation();
    const [getProfileMutation] = useGetProfileMutation();

    // Dispatcher des actions
    const dispatch = useDispatch();

    // useNavigate pour la navigation
    const navigate = useNavigate();

    // Fonction pour gérer la connexion
    const handleSignIn = async (e) => {
        e.preventDefault();

        // Appel de la mutation de connexion avec email et mot de passe
        const response = await loginMutation({
            email: email,
            password: password,
        });

        // Vérification de la réponse de la mutation de connexion
        if (response.data !== undefined && response.data.body !== undefined) {
            const token = response.data.body.token;

            // Stockage du token dans le localStorage
            localStorage.setItem("token", token);

            // Appel de la mutation de profil avec le token
            const profile = await getProfileMutation(`Bearer ${token}`);

            // Vérification de la réponse de la mutation de profil
            if (profile.data !== undefined && profile.data.body !== undefined) {
                // Dispatch de l'action setUser avec le profil de l'utilisateur
                dispatch(setUser(profile.data.body));

                // Navigation vers la page de l'utilisateur
                navigate("/user");
            } else {
                // Gestion "profile.data.body" undefined
                console.error("La réponse du profil est invalide.", profile);
            }
        } else {
            // Gestion "response.data.body" undefined
            console.error("La réponse de la requête est invalide.", response);
        }

        // Réinitialisation des états locaux
        setEmail("");
        setPassword("");
    };

    // Rendu du formulaire de connexion
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
