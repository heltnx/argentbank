import React from 'react';
import { Link } from 'react-router-dom';
// images
import argentBankLogo from '../../assets/img/argentBankLogo_edit.png';
import user from '../../assets/img/user.png';
import param from '../../assets/img/param.png';
import off from '../../assets/img/off.png';
// style 
import '../navbar/navbar.css';
import './header-edit.css';
// REDUX 
import { useCurrentUserProfile } from '../../features/user/userProfile.js';

const HeaderEdit = () => {

    const currentUserProfile = useCurrentUserProfile();

    return (
        <div className="header-edit ">

            <nav className="main-nav nav-edit">

                <div className="main-nav-logo">
                    <Link to="/" >
                        <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
                        <h1 className="sr-only">Argent Bank</h1>
                    </Link>
                </div>

                <div className="main-nav-icon">
                    <div className='user-edit-profile'>
                        <p>{currentUserProfile.userName}</p>
                        <img className="user-circle" src={user} alt="user-circle" />
                    </div>

                    <div className="user-param">
                        <img src={param} alt="parametres" />
                    </div>

                    <div className="user-off">
                        <img src={off} alt="off" />
                    </div>

                </div>
            </nav>

        </div>
    )
};

export default HeaderEdit;