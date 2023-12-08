import React from 'react';
import { Link } from 'react-router-dom';
// images
import argentBankLogo from '../../assets/img/argentBankLogo.png';
//style
import './navbar.css';
import { useSelector } from 'react-redux';

const NavBar = () => {

    const isAuthenticated = useSelector((state) => state.user.userLoggedIn);
    const currentUserProfile = useSelector((state) => state.user.currentUserProfile);

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
                    <div>
                        <Link to="/user" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            {currentUserProfile.userName}
                        </Link>
                        <Link to="/" className='main-nav-item'>
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