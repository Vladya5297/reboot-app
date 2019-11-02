import React from 'react';
import Header from './Header/HeaderContainer'
import MainArea from './MainArea/MainAreaContainer'
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
