import React, { createContext } from 'react';

import { useUser } from '../hooks';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const { user ,handleSignin, handleSignup, handleLogout } = useUser();
    
    return (
        <UserContext.Provider value={{ user, handleSignin, handleSignup, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };