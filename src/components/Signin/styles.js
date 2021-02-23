import styled from 'styled-components';

const Div = styled.div`
    background-color: hsl(44, 0%, 100%); 
    padding: 1%;
    border-radius: 3%;
    -webkit-box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.32);
    -moz-box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.32);
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.32);

    flex-basis: 30%;
    min-width: 300px;
    height: 76%;
    min-height: 380px;
    max-height: 450px;

    display: flex;
    justify-content: center;
    
    position: relative;
    

    & > form > button {
        position: absolute;
        bottom: 90px;
        outline: none;
    }
`;



export { Div };