import { connect } from 'react-redux'
import { startStickerDragging, 
    stopStickerDragging, 
    deleteSticker,
    changeStickerType,
    openStickerEditingWindow
} from '../../store/actionCreators'
import Sticker from './Sticker'

const mapStateToProps = (state) => ({
    stickerDraggingId: state.stickerDragging.id
});

const mapDispatchToProps = (dispatch) => ({
    startStickerDragging: (id, stickerType) => dispatch(startStickerDragging(id, stickerType)),
    stopStickerDragging: () => dispatch(stopStickerDragging()),

    deleteSticker: (id) => dispatch(deleteSticker(id)),

    changeStickerType: (id, stickerType) => dispatch(changeStickerType(id, stickerType)),

    openStickerEditingWindow: (id, stickerType) => dispatch(openStickerEditingWindow(id, stickerType)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sticker);