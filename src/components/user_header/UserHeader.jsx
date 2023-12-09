import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../button/Button';

const HeaderComponent = ({ onEditNameClick }) => {
    // Utilise useSelector pour extraire currentUserProfile du state Redux
    const currentUserProfile = useSelector((state) => state.user.currentUserProfile);

    return (
        <div className="header">

            {/* Affiche le message de bienvenue avec le nom de l'utilisateur */}
            <h1>Welcome back<br />{currentUserProfile.userName} !</h1>

            {/* Utilise un lien de React Router pour rediriger vers la page d'édition du nom */}
            <Link to="/edit_name" className='edit-button'>
                <Button text="Edit Name" onClick={onEditNameClick} />
            </Link>

        </div>
    )
};

export default HeaderComponent;
