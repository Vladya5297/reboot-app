import { connect } from 'react-redux'
import DeleteStickerZone from './DeleteStickerZone'

const mapStateToProps = (state) => ({
    isVisible: state.stickerDragging.isActive
});

export default connect(
    mapStateToProps
)(DeleteStickerZone);