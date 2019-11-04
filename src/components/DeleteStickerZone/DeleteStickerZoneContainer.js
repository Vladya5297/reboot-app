import { connect } from 'react-redux'
import DeleteStickerZone from './DeleteStickerZone'

const mapStateToProps = (state) => ({
    isHidden: state.deleteZone.isHidden
});

export default connect(
    mapStateToProps
)(DeleteStickerZone);