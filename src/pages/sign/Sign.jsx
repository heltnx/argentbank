import React from 'react';
// layouts
import Layout from '../../Layouts/Layout';
import SignForm from '../../Layouts/SignForm/SignForm';
// style
import './sign.css'

const Sign = () => {
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