import { connect } from 'react-redux'
import { closeStickerEditingWindow } from '../../store/actionCreators'
import StickerEditingWindow from './StickerEditingWindow'

const mapStateToProps = (state) => ({
    sticker: state.stickers.array.filter((elem)=>{
        return elem.id === state.segmentWindow.type
    })[0],
    isActive: state.stickerEditingWindow.isActive,
    type: state.stickerEditingWindow.type
});

const mapDispatchToProps = (dispatch) => ({
    closeWindow: () => dispatch(closeStickerEditingWindow())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StickerEditingWindow)