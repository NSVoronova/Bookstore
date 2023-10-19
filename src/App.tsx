import React from 'react';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import MainPage from './pages/MainPage/MainPage';
import SearchPage from './pages/SearchPage/SearchPage';
import { Routes, Route } from 'react-router-dom';
import BookCardFull from './components/BookCardFull/BookCardFull';

function App() {
  return (
    <><Routes>
      <Route path="/" element={<MainLayout>
        <MainPage/>
      </MainLayout>}/>
      <Route path='/book/:id' element={
        <MainLayout>
        <BookCardFull/>
      </MainLayout>
      }/>
      <Route path='/search' element={
        <MainLayout>
        <SearchPage/>
      </MainLayout>
      }/>
    </Routes>
      
    </>
  );
}

export default App;
