import React from 'react';
import Header from './Header/HeaderContainer'
import MainArea from './MainArea/MainAreaContainer'
import SegmentWindow from './SegmentWindow/SegmentWindowContainer'
import StickerEditingWindow from './StickerEditingWindow/StickerEditingWindowContainer'
import { connect } from 'react-redux'
import * as style from './MainPage.module.css'

const mapStateToProps = (state) => ({
  isSegmentWindowActive: state.segmentWindow.isActive,
  isStickerEditingActive: state.stickerEditingWindow.isActive,
});

const MainPage = (props) => {
  return (
    <div className={style.wrapper}>
      <Header />
      <MainArea />
      {props.isSegmentWindowActive && <SegmentWindow />}
      {props.isStickerEditingActive && <StickerEditingWindow />}
    </div>
  )
}

export default connect(mapStateToProps)(MainPage);