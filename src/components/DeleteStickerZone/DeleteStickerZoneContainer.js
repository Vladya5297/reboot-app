import { connect } from 'react-redux'
import { deleteSticker } from '../../store/actionCreators'
import DeleteStickerZone from './DeleteStickerZone'

const mapStateToProps = (state) => ({
    isHidden: state.deleteZone.isHidden
});

const mapDispatchToProps = (dispatch) => ({
    deleteSticker: () => dispatch(deleteSticker()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteStickerZone);