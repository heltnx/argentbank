import React from 'react';
import { Link } from 'react-router-dom';
// images
import argentBankLogo from '../../assets/img/argentBankLogo.png';
// style
import './navbar.css';
// redux
import { useDispatch } from 'react-redux';
import { userLoggedOut } from '../../features/user/userSlice.js';
import { useCurrentUserProfile, useIsAuthenticated } from '../../features/user/userProfile';

const NavBar = () => {

    const isAuthenticated = useIsAuthenticated();
    const currentUserProfile = useCurrentUserProfile();

    // Utilisation du hook useDispatch pour obtenir la fonction dispatch du store Redux
    const dispatch = useDispatch();

    // Fonction gérant la déconnexion de l'utilisateur
    const handleSignOut = () => {

        // Dispatche l'action "userLoggedOut" pour gérer la déconnexion dans le store Redux
        dispatch(userLoggedOut());

    };

    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {/* condition pour la connection */}
                {isAuthenticated ? (

                    <div className='userAuthentify'>
                        {/* Lien vers la page du profil utilisateur */}
                        <Link to="/user" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            {currentUserProfile.userName}
                        </Link>

                        {/* Lien pour déclencher la fonction de déconnexion */}
                        <Link to="/" onClick={handleSignOut} className='main-nav-item'>
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </Link>
                    </div>
                ) : (
                    //Lien vers la page de connexion
                    <div>
                        <Link to="/sign" className="main-nav-item">
                            <i className="fa fa-user-circle"></i> Sign In
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;