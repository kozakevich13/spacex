import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/SliderContainer/SliderContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path='/favorites' element={<Favorites/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
