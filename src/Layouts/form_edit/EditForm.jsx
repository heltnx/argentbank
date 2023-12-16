import React, { useState } from 'react';
// components
import Button from '../../components/button/Button';
// style
import './edit-form.css'
// REDUX
import { useDispatch } from 'react-redux';
import { useCurrentUserProfile } from '../../features/user/userProfile';
import { useUpdateUserNameMutation } from "../../services/user.js"
import { setUser } from '../../features/user/userSlice.js'

const EditForm = ({ onClose }) => {
    const dispatch = useDispatch();
    const currentUserProfile = useCurrentUserProfile();
    const [newUserName, setNewUserName] = useState(currentUserProfile.userName);
    const [updateUserNameMutation] = useUpdateUserNameMutation();

    const handleSave = async (e) => {

        e.preventDefault();

        try {
            const token = `Bearer ${localStorage.getItem('token')}`;

            const response = await updateUserNameMutation({ newUserName, token });
            if (response.data) {

                dispatch(setUser(response.data.body));
                onClose();
            }

        } catch (error) {
            console.error('Failed to update user name:', error);
        }
    };

    return (

        <div className="sign-in-content edit-form">

            <h2>Edit user info</h2>

            <form className='sign-in edit-form'>

                <div className="input-wrapper">
                    <label htmlFor="userName">User name</label>
                    <input
                        type="text"
                        id="userName"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)}
                    />
                </div>

                <div className="input-wrapper">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        defaultValue={currentUserProfile.firstName}
                        disabled
                    />
                </div>

                <div className="input-wrapper">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        defaultValue={currentUserProfile.lastName}
                        disabled
                    />
                </div>
                <div className="input-wrapper button-wrapper">
                    <Button className="sign-in-button comp-button" text="Save" onClick={handleSave} />
                    <Button className="sign-in-button comp-button" text="Cancel" onClick={onClose} />
                </div>
            </form>

        </div>
    );
}

export default EditForm;