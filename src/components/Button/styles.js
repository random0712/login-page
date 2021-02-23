import styled from 'styled-components';

const StyledButton = styled.button`
    & {
        width: 55%;
        flex-basis: 9%;
        min-height: 30px;
        

        border-radius: 5px;
        border: 1px solid hsl(168, 34%, 60%);
        color: white;
        background-color: hsl(168, 34%, 45%);

        
    }

    &:hover {
        background-color: hsl(168, 34%, 37%);
    }

`;

export { StyledButton };