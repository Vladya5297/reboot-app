import React from 'react';
import Header from './Header/HeaderContainer'
import MainArea from '../../components/MainArea/MainAreaContainer'
import StickerEditingWindow from '../../components/StickerEditingWindow/StickerEditingWindowContainer'
import { connect } from 'react-redux'

const MainPage = (props) => {
    return (
        <div style={{
            height: "100%",
            display: "flex",
            flexDirection: "column"
        }}>
            <Header />
            <MainArea />
            {props.isStickerEditingActive && <StickerEditingWindow />}
        </div >
    )
}

const mapStateToProps = (state) => ({
    isStickerEditingActive: state.stickerEditingWindow.isActive,
});

export default connect(mapStateToProps)(MainPage);