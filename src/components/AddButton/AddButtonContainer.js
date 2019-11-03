import { connect } from 'react-redux'
import { addSticker } from '../../store/actionCreators'
import AddButton from './AddButton'

const mapStateToProps = (state) => ({
    stickers: state.stickers.array
});

const mapDispatchToProps = (dispatch) => ({
    addSticker: () => dispatch(addSticker()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddButton);