import React from 'react';

const Input = ({children, onChange, type="text", id}) => {

    return (
        <input type={type} onChange={onChange} id={id} />
    )
};


export default Input;