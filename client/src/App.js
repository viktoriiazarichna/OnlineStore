import React from 'react';
import './App.css';

import { MainPage } from './components/pages';
import { MainContextProvider, UserContextProvider } from './context';

function App() {
  return (
    <UserContextProvider>
      <MainContextProvider>
        <MainPage />
      </MainContextProvider>
    </UserContextProvider>
  );
}

export default App;
