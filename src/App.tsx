import React from 'react';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="wrapper">
      <MainLayout>
        <MainPage/>
      </MainLayout>
    </div>
  );
}

export default App;
