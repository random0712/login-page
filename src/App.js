import React from 'react';

import { UserProvider } from './contexts'

import { Signin, Signup } from './components';

import { StyledApp } from './styles';

import api from './config/axios'
import { useToggle } from './hooks';

function App() {
  const [toggle, toggleState] = useToggle('signin', 'signup');
  return (
    <UserProvider>
      <StyledApp>
        {toggle === 'signin' 
          ? <Signin toggleState={toggleState} />
          : <Signup toggleState={toggleState} />}
      </StyledApp>
    </UserProvider>
  );
}

export default App;
