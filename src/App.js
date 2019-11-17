import React from 'react';
import Header from './components/Header/HeaderContainer'
import MainArea from './components/MainArea/MainAreaContainer'
import SegmentWindow from './components/SegmentWindow/SegmentWindowContainer'
import StickerEditingWindow from './components/StickerEditingWindow/StickerEditingWindowContainer'
import { connect } from 'react-redux'
import './App.css';

const mapStateToProps = (state) => ({
  isSegmentWindowActive: state.segmentWindow.isActive,
  isStickerEditingActive: state.stickerEditingWindow.isActive,
});

function App (props) {
  
  // вывод страницы
  return (
    <div className="App">
        <Header />
        <MainArea />
        {props.isSegmentWindowActive && <SegmentWindow />}
        {props.isStickerEditingActive && <StickerEditingWindow />}
    </div>
  );
}

export default connect(mapStateToProps)(App);
