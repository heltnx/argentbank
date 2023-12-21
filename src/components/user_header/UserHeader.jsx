import React, { useState } from 'react';
import Button from '../button/Button';
import EditForm from '../../layouts/form_edit/EditForm';
import { useCurrentUserProfile } from '../../features/user/userProfile';

const HeaderComponent = () => {
    const currentUserProfile = useCurrentUserProfile();
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
