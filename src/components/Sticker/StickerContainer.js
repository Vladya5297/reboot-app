import { connect } from 'react-redux'
import { startStickerDragging, 
    stopStickerDragging, 
    deleteSticker,
    changeStickerType,
    addTransparentSticker,
    deleteTransparentSticker
} from '../../store/actionCreators'
import Sticker from './Sticker'

const mapStateToProps = (state) => ({
    stickerDraggingId: state.stickerDragging.id
});

const mapDispatchToProps = (dispatch) => ({
    startStickerDragging: (id, stickerType) => dispatch(startStickerDragging(id, stickerType)),
    stopStickerDragging: () => dispatch(stopStickerDragging()),
    deleteSticker: (id) => dispatch(deleteSticker(id)),
    changeStickerType: (id, type) => dispatch(changeStickerType(id, type)),
    addTransparentSticker: (stickerType) => dispatch(addTransparentSticker(stickerType)),
    deleteTransparentSticker: () => dispatch(deleteTransparentSticker())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sticker);