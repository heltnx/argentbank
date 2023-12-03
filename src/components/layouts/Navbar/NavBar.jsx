import React from 'react';
// images
import argentBankLogo from '../../../assets/img/argentBankLogo.png';
//style
import './navbar.css';

const NavBar = () => {
    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="./index.html">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a className="main-nav-item" href="./sign-in.html">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </a>
            </div>
        </nav>
    );
};

export default NavBar;