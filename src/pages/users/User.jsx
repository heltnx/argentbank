import React from 'react';
// layouts
import Layout from '../../layouts/Layout';
// components
import UserHeader from '../../components/user_header/UserHeader'
import Account from '../../components/user_accompte/UserAccount';
// style
import './user.css'

const User = ({ userName }) => {

    const handleViewTransactions = () => {

    };

    return (
        <Layout className='user'>
            <main className="main bg-dark">
                <UserHeader />
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