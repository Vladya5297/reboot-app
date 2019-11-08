import React from 'react';
import Header from './components/Header/HeaderContainer'
import MainArea from './components/MainArea/MainAreaContainer'
import SegmentWindow from './components/SegmentWindow/SegmentWindowContainer'
import './App.css';

function App() {
  
  // вывод страницы
  return (
    <div className="App">
        <Header />
        <MainArea />
        <SegmentWindow />
    </div>
  );
}

export default App;
