import { connect } from 'react-redux'
import { maximizeSegment } from '../../../store/actionCreators'
import Segment from './Segment'

const mapStateToProps = (state, ownProps) => ({
    stickers: state.stickers.array.filter((elem)=>{
        return elem.type === ownProps.type
    })
});

const mapDispatchToProps = (dispatch) => ({
    openWide: (segmentType) => dispatch(maximizeSegment(segmentType))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Segment);