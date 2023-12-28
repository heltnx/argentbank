import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../../components/checkbox/Checkbox';
import Button from '../../components/button/Button';
import './signForm.css';
import { useLoginMutation, useGetProfileMutation } from '../../services/user';
import { useUserActions } from '../../features/user/userActions';

const SignForm = () => {

    // Utilisation du hook useState pour gérer l'état local du composant
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Utilisation de mutations pour effectuer des requêtes avec le service user
    const [loginMutation, { isError }] = useLoginMutation();
    const [getProfileMutation] = useGetProfileMutation();
    const navigate = useNavigate();

    // instance de useUserActions
    const { setUser } = useUserActions();

    // Fonction de gestion de la soumission du formulaire de connexion
    const handleSignIn = async (e) => {
        e.preventDefault();

        // Appel de la mutation pour effectuer la connexion
        const response = await loginMutation({
            email: email,
            password: password,
        });

        if (response.data?.body) {
            // Récupération du token et stockage dans le localStorage
            const token = response.data.body.token;
            localStorage.setItem("token", token);

            // Appel de la mutation pour récupérer le profil de l'utilisateur
            const profile = await getProfileMutation(`Bearer ${token}`);

            if (profile.data?.body) {
                // useUserActions pour mettre à jour l'état Redux
                setUser(profile.data.body);

                // Redirection vers la page utilisateur
                navigate("/user");
            } else {
                console.error("La réponse du profil est invalide.", response);
            }
        } else {
            console.error("La réponse de la requête est invalide.", response);
        }

        // Réinitialisation des champs
        setEmail("");
        setPassword("");
    };

    // Rendu du composant formulaire de connexion
    return (
        <form className='sign-in'>
            <div className="input-wrapper">
                <label htmlFor="username">Nom d'utilisateur</label>
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
                <label htmlFor="password">Mot de passe</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </div>
            <Checkbox id="remember-me" label="Se souvenir de moi" />
            <Button className="sign-in-button comp-button" text="Se Connecter" onClick={handleSignIn} />
            {isError ? <p className='error'>Identifiant ou mot de passe erroné</p> : ""}
        </form>
    );
};

export default SignForm;
