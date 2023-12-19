import React from 'react';

const Checkbox = ({ id, label }) => (
    <div className="input-remember">
        <input type="checkbox" id={id} />
        <label htmlFor={id}>{label}</label>
    </div>
);

export default Checkbox;
