import React from 'react';
import Button from '../button/Button';

const Account = ({ title, amount, description, onTransactionsClick }) => (
    <section className="account">
        <div className="account-content-wrapper">
            <h3 className="account-title">{title}</h3>
            <p className="account-amount">{amount}</p>
            <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
            <div className="transaction-button" >
                <Button text="View Transactions" onClick={onTransactionsClick} />
            </div>
        </div>
    </section>
);

export default Account;
