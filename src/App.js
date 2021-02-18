import React from 'react';

import { UserProvider } from './contexts/user'

import { Signin } from './components';

import api from './config/axios'

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Signin />
        <button onClick={() => api.get("/token").then(res => console.log(res))} >token validtion</button>
      </div>
    </UserProvider>
  );
}

export default App;
