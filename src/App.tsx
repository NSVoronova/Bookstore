import React from 'react';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import MainPage from './pages/MainPage/MainPage';
import BookPage from './pages/BookPage/BookPage';
import SearchPage from './pages/SearchPage/SearchPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <><Routes>
      <Route path="/" element={<MainLayout>
        <MainPage/>
      </MainLayout>}/>
      <Route path='/book/:id' element={
        <MainLayout>
        <BookPage/>
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
