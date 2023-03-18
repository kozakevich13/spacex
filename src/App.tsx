import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>
      </header>
      <Content/>
    </div>
  );
}

export default App;
