import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../button/Button';
import EditForm from '../../layouts/form_edit/EditForm';

const HeaderComponent = () => {
    // Utilise useSelector pour extraire currentUserProfile du state Redux
    const currentUserProfile = useSelector((state) => state.user.currentUserProfile);
    const [editing, setEditing] = useState(false);

    const onEditNameClick = () => {
        setEditing(!editing);
    }

    return (
        <div className="header">
            <h1>Welcome back<br />{currentUserProfile.userName} !</h1>

            {editing ? (
                <EditForm onClose={onEditNameClick} />
            ) : (
                <Button className='edit-button' text="Edit Name" onClick={onEditNameClick} />
            )}
        </div>
    )
};

export default HeaderComponent;
