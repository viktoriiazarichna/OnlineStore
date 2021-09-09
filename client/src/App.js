import React from 'react';
import './App.css';

import { MainPage } from './components/pages';
import { MainContextProvider } from './context';

function App() {
  return (
    <MainContextProvider>
      <MainPage />
    </MainContextProvider>
  );
}

export default App;
