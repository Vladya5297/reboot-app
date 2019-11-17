import { connect } from 'react-redux'
import {
    closeStickerEditingWindow,
    changeStickerText
} from '../../../store/actionCreators'
import StickerEditingWindow from './StickerEditingWindow'

const mapStateToProps = (state) => ({
    sticker: state.stickers.array.filter((elem) => {
        return elem.id === state.stickerEditingWindow.id
    })[0],
    isActive: state.stickerEditingWindow.isActive,
    type: state.stickerEditingWindow.type
});

const mapDispatchToProps = (dispatch) => ({
    closeWindow: () => dispatch(closeStickerEditingWindow()),
    changeStickerText: (id, header, content) => dispatch(changeStickerText(id, header, content))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StickerEditingWindow)