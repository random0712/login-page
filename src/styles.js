import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {

        font-family: 'Open Sans', sans-serif;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
    }

    #root {
        height: 100vh;
        background-color: #d6d5c9;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23373b3e' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23b6b7a1' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23364847' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23a6a793' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23375550' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23878877' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23385e56' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23818275' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23437269' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%2365665d' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%233b6f64' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23393939' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
    }
`;

const StyledApp = styled.div`
    display: flex;
    height: inherit;
    justify-content: center;
    align-items: center; 
`;

export { GlobalStyle, StyledApp };