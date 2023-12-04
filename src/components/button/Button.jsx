import React from 'react';
import './button.css'

const Button = ({ text, onClick }) => (
    <button className="comp-button" onClick={onClick}>
        {text}
    </button>
);

export default Button;