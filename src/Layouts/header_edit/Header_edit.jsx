import React from 'react';
//import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
//import Button from '../../components/button/Button';
// images
import argentBankLogo from '../../assets/img/argentBankLogo_edit.png';
import user from '../../assets/img/user.png';
import param from '../../assets/img/param.png';
import off from '../../assets/img/off.png'
// style 
import '../navbar/navbar.css'
import './header-edit.css'

const HeaderEdit = () => {

    return (
        <div className="header">

            <nav className="main-nav nav-edit">

                <div class="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={argentBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </div>
                <div class="main-nav-icon">
                    <img
                        className="user-circle"
                        src={user}
                        alt="user-circle"
                    />
                    <img
                        className="user-param"
                        src={param}
                        alt="parametres"
                    />
                    <img
                        className="user-off"
                        src={off}
                        alt="off"
                    />
                </div>

            </nav>

            {/* Affiche le message de bienvenue avec le nom de l'utilisateur */}
            <h1>Edit user info</h1>

            {/* Utilise un lien de React Router pour rediriger vers la page d'édition du nom 
            <Link to="/edit_name" className='edit-button'>
                <Button text="Save" />
            </Link>*/}

        </div>
    )
};

export default HeaderEdit;