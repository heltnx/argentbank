import React from 'react';
// layouts
import Layout from '../../Layouts/Layout';
import SignForm from '../../Layouts/form_sign_in/SignForm';
// style
import './sign.css'
import { useNavigate } from 'react-router-dom';

import { useSelector } from "react-redux"

const Sign = () => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.user.userLoggedIn);

    if (isAuthenticated) {
        navigate("/user");
    }

    return (
        <Layout className='sign'>
            <section className="main bg-dark">
                <div className='sign-in-content' >
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <SignForm />
                </div>
            </section>
        </Layout>
    )
};

export default Sign;