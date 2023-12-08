import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../../components/button/Button';

const HeaderComponent = ({ onEditNameClick }) => {
    const currentUserProfile = useSelector((state) => state.user.currentUserProfile);

    return (
        <div className="header">
            <h1>Welcome back<br />{currentUserProfile.userName} !</h1>
            <Link to="/edit-name" className='edit-button'>
                <Button text="Edit Name" onClick={onEditNameClick} />
            </Link>
        </div>
    )
};

export default HeaderComponent;
