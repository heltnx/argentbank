import React from 'react';

const Input = ({ type, id, label }) => (
    <div className="input-wrapper">
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} />
    </div>
);

export default Input;