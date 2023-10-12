import React from 'react';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import MainPage from './pages/MainPage/MainPage';
import BookPage from './pages/BookPage/BookPage';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
  return (
    <div className="wrapper">
      <MainLayout>
        {/* <BookPage/> */}
        <MainPage/>
        {/* <SearchPage/> */}
      </MainLayout>
    </div>
  );
}

export default App;
