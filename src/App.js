import React from 'react';
import Header from './components/Header/HeaderContainer'
import MainArea from './components/MainArea/MainAreaContainer'
import SegmentWindow from './components/SegmentWindow/SegmentWindowContainer'
import StickerEditingWindow from './components/StickerEditingWindow/StickerEditingWindowContainer'
import './App.css';

function App() {
  
  // вывод страницы
  return (
    <div className="App">
        <Header />
        <MainArea />
        <SegmentWindow />
        <StickerEditingWindow />
    </div>
  );
}

export default App;
