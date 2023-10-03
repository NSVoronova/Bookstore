import React from 'react';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="wrapper">
      <MainLayout>
        <Header/>
      </MainLayout>
    </div>
  );
}

export default App;
