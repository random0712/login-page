import React, { useContext } from 'react';

import { UserContext } from '../../contexts/user';

import { Form, Button, Input } from '../index';

function signinSubmit(event, handleSignin) {
    event.preventDefault();
    const params = {}

    //Getting input data
    event.target.querySelectorAll("input").forEach(input => {
        const inputData = { [input.id]: input.value };
        Object.assign(params, inputData);

        input.value = '';
    })
    
    handleSignin(params)
}


const Signin = () => {

    const { handleSignin } = useContext(UserContext);
    
    return (
        <Form onSubmit={(event) => signinSubmit(event, handleSignin)}>
             <Input id="email"/>
             <Input id="password"/>
             <Button>Log in</Button>
        </Form>
    )
}

export default Signin;