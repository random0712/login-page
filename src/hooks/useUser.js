import React, { useState, useEffect } from 'react'

import api from '../config/axios';


const useUser = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        console.log('effect');
    }, [])

    function handleSignin(data) {
        api.post('signin', data)
            .then(res => {
                const { token, user } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));

                setUser(user);
                api.defaults.headers.Authorization = `Bearer ${token}`;
                console.log(api.defaults.headers);
            })
            .catch(console.error)
    }
    
    function handleSignup() {

    } 
    
    function handleLogout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setUser({});
        api.defaults.headers.Authorization = "";
    }

    return { user, handleSignin, handleSignup, handleLogout }
};

export default useUser;

