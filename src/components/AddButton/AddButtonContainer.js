import AddButton from './AddButton'
import { connect } from 'react-redux'
import { addSticker } from '../../store/actionCreators';
import { openStickerEditingWindow } from '../../store/actionCreators'

const mapStateToProps = (state, ownProps) => ({
    isVisible: state.hover === ownProps.type,
    currentId: state.stickers.currentId
});

const mapDispatchToProps = (dispatch) => ({
    addSticker: (stickerType)=>{dispatch(addSticker(stickerType))},
    openStickerEditingWindow: (id, stickerType) => dispatch(openStickerEditingWindow(id, stickerType)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);