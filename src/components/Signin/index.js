import React, { useContext } from 'react';

import { UserContext } from '../../contexts/user';

import { Form, Button, Input, StyledLink } from '../index';

import { Div } from './styles';

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


const Signin = ({ toggleState }) => {

    const { handleSignin } = useContext(UserContext);
    
    return (
        <Div>
            <Form onSubmit={(event) => signinSubmit(event, handleSignin)}>
                <Input id="email" label="Email"/>
                <Input id="password" label="Password" type="password" />
                <Button>Log in</Button>
                <StyledLink onClick={() => toggleState()} >Don´t have an account yet? Register now clicking here!</StyledLink>
            </Form>
        </Div>
    )
}

export default Signin;