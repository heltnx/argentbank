import React from 'react';

const Button = ({ text, onClick }) => (
    <a href="./user.html" className="sign-in-button" onClick={onClick}>
        {text}
    </a>
);


export default Button;