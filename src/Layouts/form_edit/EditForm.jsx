import React from 'react';
// components
import Button from '../../components/button/Button';
// style
import './edit-form.css'
// REDUX
import { useCurrentUserProfile } from '../../features/user/userProfile';

const EditForm = () => {

    const currentUserProfile = useCurrentUserProfile();

    return (
        <div className="sign-in-content edit-form">
            <h2>Edit user info</h2>

            <form className='sign-in edit-form'>

                <div className="input-wrapper">
                    <label htmlFor="userName">User name</label>
                    <input
                        type="text"
                        id="userName"
                        defaultValue={currentUserProfile.userName}
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
                    <Button className="sign-in-button comp-button" text="Save" />
                    <Button className="sign-in-button comp-button" text="Cancel" />
                </div>
            </form>

        </div>
    );
}

export default EditForm;