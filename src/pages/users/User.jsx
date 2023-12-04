import React from 'react';
import { Link } from 'react-router-dom';
// layouts
import Layout from '../../Layouts/Layout';
// components
import Button from '../../components/button/Button'
// style
import './user.css'

const User = () => {
    const handleEditName = () => {
        // Logique pour gérer l'édition du nom
        console.log('Edit Name clicked');
    };

    const handleViewTransactions = () => {
        // Logique pour gérer la vue des transactions
        console.log('View Transactions clicked');
    };

    return (
        <Layout className='user'>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <Link to="/edit-name" className='edit-button'>
                        <Button text="Edit Name" onClick={handleEditName} />
                    </Link>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta" >
                        <div className="transaction-button" >
                            <Button text="View Transactions" onClick={handleViewTransactions} />
                        </div>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <div className="transaction-button" >
                            <Button className='transaction-button' text="View Transactions" onClick={handleViewTransactions} />
                        </div>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <div className="transaction-button" >
                            <Button className='transaction-button' text="View Transactions" onClick={handleViewTransactions} />
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
};

export default User;