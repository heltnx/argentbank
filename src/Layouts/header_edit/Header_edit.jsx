import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Button from '../../components/button/Button';
// images
import argentBankLogo from '../../assets/img/argentBankLogo_edit.png';
// style 
import '../navbar/navbar.css'

const HeaderEdit = () => {

    return (
        <div className="header">

            <nav className="main-nav">
                <Link to="/" className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={argentBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link> </nav>

            {/* Affiche le message de bienvenue avec le nom de l'utilisateur */}
            <h1>Edit user info</h1>

            {/* Utilise un lien de React Router pour rediriger vers la page d'édition du nom */}
            <Link to="/edit_name" className='edit-button'>
                <Button text="Save" />
            </Link>

        </div>
    )
};

export default HeaderEdit;