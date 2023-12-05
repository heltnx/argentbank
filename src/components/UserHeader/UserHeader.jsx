import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

const HeaderComponent = ({ userName, onEditNameClick }) => (
    <div className="header">
        <h1>Welcome back<br />{userName}!</h1>
        <Link to="/edit-name" className='edit-button'>
            <Button text="Edit Name" onClick={onEditNameClick} />
        </Link>
    </div>
);

export default HeaderComponent;
