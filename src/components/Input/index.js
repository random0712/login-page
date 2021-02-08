import React from 'react';

const Input = ({children, onChange, type="text"}) => {

    return (
        <input type={type} onChange={onChange}/>
    )
};


export default Input;