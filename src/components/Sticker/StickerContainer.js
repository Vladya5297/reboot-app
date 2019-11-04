import { connect } from 'react-redux'
import { showDeleteZone, hideDeleteZone, deleteSticker } from '../../store/actionCreators'
import Sticker from './Sticker'

// const mapStateToProps = (state) => ({
//     
// });

const mapDispatchToProps = (dispatch) => ({
    showDeleteZone: () => dispatch(showDeleteZone()),
    hideDeleteZone: () => dispatch(hideDeleteZone()),
    deleteSticker: (id) => dispatch(deleteSticker(id)),
})

export default connect(
    null,
    mapDispatchToProps
)(Sticker);