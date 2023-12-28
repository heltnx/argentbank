import React from 'react';
import { Link } from 'react-router-dom';
import argentBankLogo from '../../assets/img/argentBankLogo.png';
import './navbar.css';
import { useUserActions } from '../../features/user/userActions';
import { useCurrentUserProfile, useIsAuthenticated } from '../../features/user/userProfile';

const NavBar = () => {
    const isAuthenticated = useIsAuthenticated();
    const currentUserProfile = useCurrentUserProfile();

    // instance de useUserActions
    const { userLoggedOut } = useUserActions();

    // Utilisation la fonction userLoggedOut pour gérer la déconnexion
    const handleSignOut = () => {
        userLoggedOut();
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
                {isAuthenticated ? (
                    <div className='userAuthentify'>
                        <Link to="/user" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            {currentUserProfile.userName}
                        </Link>
                        <Link to="/" onClick={handleSignOut} className='main-nav-item'>
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </Link>
                    </div>
                ) : (
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
