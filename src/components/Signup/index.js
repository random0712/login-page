import React, { useContext } from 'react';

import { UserContext } from '../../contexts';

import { Button, Form, Input, StyledLink } from '../index';

import { Div } from './styles';

const Signup = ({ toggleState }) => {

    const { handleSignup } = useContext(UserContext);

    function signupSubmit(event, handleSignup) {
        event.preventDefault();
        const params = {}
    
        //Getting input data
        event.target.querySelectorAll("input").forEach(input => {
            const inputData = { [input.id]: input.value };
            Object.assign(params, inputData);
    
            input.value = '';
        })
        
        handleSignup(params)
    }

    return (
        <Div>
            <Form onSubmit={(event) => signupSubmit(event, handleSignup)}>
                <Input id="username" label="Username"/>
                <Input id="email" label="Email"/>
                <Input id="password" label="Password" type="password" />
                <Button>Signup for free!</Button>
                <StyledLink onClick={() => toggleState()} >Already have an account? Log in here!</StyledLink>
            </Form>
        </Div>
    )
}

export default Signup;