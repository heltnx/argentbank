import React from 'react';
// layouts

import SignForm from '../../Layouts/SignForm/SignForm';

const Sign = () => (
    <main>
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <SignForm />
        </section>
    </main>
);

export default Sign;