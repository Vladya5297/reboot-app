import { connect } from 'react-redux'
import { showDeleteZone, 
    hideDeleteZone, 
    deleteSticker,
    changeStickerType,
    addTransparentSticker,
    deleteTransparentSticker
} from '../../store/actionCreators'
import Sticker from './Sticker'

const mapDispatchToProps = (dispatch) => ({
    showDeleteZone: () => dispatch(showDeleteZone()),
    hideDeleteZone: () => dispatch(hideDeleteZone()),
    deleteSticker: (id) => dispatch(deleteSticker(id)),
    changeStickerType: (id, type) => dispatch(changeStickerType(id, type)),
    addTransparentSticker: (stickerType) => dispatch(addTransparentSticker(stickerType)),
    deleteTransparentSticker: () => dispatch(deleteTransparentSticker())
})

export default connect(
    null,
    mapDispatchToProps
)(Sticker);