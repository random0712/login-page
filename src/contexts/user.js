import React, { createContext } from 'react';

import useUser from '../hooks/useUser';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const { handleSignin, handleSignup, handleLogout } = useUser();
    
    return (
        <UserContext.Provider value={{ handleSignin, handleSignup, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };