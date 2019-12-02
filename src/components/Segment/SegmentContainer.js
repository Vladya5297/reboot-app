import { connect } from 'react-redux'
import Segment from './Segment'
import { changeHover } from '../../store/actionCreators';

const mapStateToProps = (state, ownProps) => ({
    stickers: state.stickers.array.filter((elem)=>{
        return elem.type === ownProps.type
    }),
    hover: state.hover
});

const mapDispatchToProps = (dispatch) => ({
    changeHover: (hover)=>{dispatch(changeHover(hover))}
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Segment);