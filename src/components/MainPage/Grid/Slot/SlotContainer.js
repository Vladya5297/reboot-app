import {connect} from 'react-redux'
import {changeStickerPosition} from '../../../../store/actionCreators'
import Slot from './Slot'

const mapStateToProps = (state) => ({
    id: state.stickerDragging.id
});

const mapDispatchToProps = (dispatch) => ({
    changeStickerPosition: (id, position)=>{dispatch(changeStickerPosition(id, position))}
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Slot);