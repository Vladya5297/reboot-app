import { connect } from 'react-redux'
import { showDeleteZone, hideDeleteZone } from '../../store/actionCreators'
import Sticker from './Sticker'

// const mapStateToProps = (state) => ({
//     
// });

const mapDispatchToProps = (dispatch) => ({
    showDeleteZone: () => dispatch(showDeleteZone()),
    hideDeleteZone: () => dispatch(hideDeleteZone())
})

export default connect(
    null,
    mapDispatchToProps
)(Sticker);