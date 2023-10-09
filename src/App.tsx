import React from 'react';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import MainPage from './pages/MainPage/MainPage';
import BookPage from './pages/BookPage/BookPage';

function App() {
  return (
    <div className="wrapper">
      <MainLayout>
        <BookPage/>
      </MainLayout>
    </div>
  );
}

export default App;
