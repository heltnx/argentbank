import React, { useEffect } from 'react';
// redux
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// imports
import Layout from '../../layouts/Layout';
import SignForm from '../../layouts/form_sign_in/SignForm';
import './sign.css';

const Sign = () => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.user.userLoggedIn);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/user');
        }
    }, [isAuthenticated, navigate]);

    return (
        <Layout className='sign'>
            <section className='main bg-dark'>
                <div className='sign-in-content'>
                    <i className='fa fa-user-circle sign-in-icon'></i>
                    <h1>Sign In</h1>
                    <SignForm />
                </div>
            </section>
        </Layout>
    );
};

export default Sign;
