import React from 'react';
import { Link } from 'react-router-dom';
// layouts
import Layout from '../../Layouts/Layout';
// components
import Account from '../../components/UserAccompte/UserAccount';
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
                <Account
                    title="Argent Bank Checking (x8349)"
                    amount="$2,082.79"
                    description="Available Balance"
                    onTransactionsClick={handleViewTransactions}
                />

                <Account
                    title="Argent Bank Savings (x6712)"
                    amount="$10,928.42"
                    description="Available Balance"
                    onTransactionsClick={handleViewTransactions}
                />

                <Account
                    title="Argent Bank Credit Card (x8349)"
                    amount="$184.30"
                    description="Current Balance"
                    onTransactionsClick={handleViewTransactions}
                />

            </main>
        </Layout>
    )
};

export default User;