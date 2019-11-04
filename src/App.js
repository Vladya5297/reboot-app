import React from 'react';
import Header from './components/Header/HeaderContainer'
import MainArea from './components/MainArea/MainAreaContainer'
import './App.css';

function App() {
  
  // вывод страницы
  return (
    <div className="App">
        <Header />
        <MainArea />
    </div>
  );
}

export default App;
