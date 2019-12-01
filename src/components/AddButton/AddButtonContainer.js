import AddButton from './AddButton'
import { connect } from 'react-redux'
import { addSticker } from '../../store/actionCreators';

const mapStateToProps = (state, ownProps) => ({
    isVisible: state.hover === ownProps.type
});

const mapDispatchToProps = (dispatch) => ({
    addSticker: (stickerType)=>{dispatch(addSticker(stickerType))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);