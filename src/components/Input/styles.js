import styled from 'styled-components';

const StyledLabel = styled.label`
    font-size: 1.3rem;
    color: hsl(168, 34%, 34%);
    margin-bottom: 5px;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;

    width: 80%;
`;

const StyledInput = styled.input`
    & {
        border: 1px solid hsl(63, 14%, 68%);
        border-radius: 5px;
        background-color: hsl(55, 14%, 95%);
        height: 35px;
        padding-left: 10px;
        color: hsl(206, 6%, 22%);
        font-size: 1.1rem;

        outline: none;
        transition: padding 0.3s ease-out;
    }

    &:hover {
        background-color: hsl(55, 14%, 90%);
    }

    &:focus {
        padding: 25px;
    }
`;

export { StyledLabel, StyledDiv, StyledInput };