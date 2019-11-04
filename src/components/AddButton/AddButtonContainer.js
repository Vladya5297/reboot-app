import { connect } from 'react-redux'
import { addSticker } from '../../store/actionCreators'
import { newSticker } from '../../store/itemTypes'
import AddButton from './AddButton'

const mapStateToProps = (state) => ({
    stickers: state.stickers.array.filter((elem)=>{
        return elem.type === newSticker
    })
});

const mapDispatchToProps = (dispatch) => ({
    addSticker: () => dispatch(addSticker()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddButton);