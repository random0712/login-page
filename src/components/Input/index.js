import React from 'react';

import { StyledLabel, StyledDiv, StyledInput } from './styles';

const Input = ({children, onChange, type="text", id, label}) => {

    return (
        <StyledDiv>
            <StyledLabel htmlFor={id}>{label}: </StyledLabel>
            <StyledInput type={type} onChange={onChange} id={id} />
        </StyledDiv>
    )
};


export default Input;