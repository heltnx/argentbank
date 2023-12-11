import React from 'react';
// components
import Button from '../../components/button/Button';
// style
import './edit-form.css'
// REDUX
import { useCurrentUserProfile } from '../../features/user/userProfile';

function EditForm(props) {
    return (
        <div class="sign-in-content edit-form">
            <h2>Edit user info</h2>

            <form className='sign-in edit-form'>
                <div className="input-wrapper">
                    <label htmlFor="username">User name</label>
                    <input
                        type="text"
                        id="username"
                    />

                </div>
                <div className="input-wrapper">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        id="username"
                        value={useCurrentUserProfile.firstname}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="firstname">Last Name</label>
                    <input
                        type="text"
                        id="username"
                        value={useCurrentUserProfile.lastname}
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