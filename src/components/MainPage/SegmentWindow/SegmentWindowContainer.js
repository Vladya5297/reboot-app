import { connect } from 'react-redux'
import { minimizeSegment } from '../../../store/actionCreators'
import SegmentWindow from './SegmentWindow'

const mapStateToProps = (state) => ({
    stickers: state.stickers.array.filter((elem)=>{
        return elem.type === state.segmentWindow.type
    }),
    isActive: state.segmentWindow.isActive,
    type: state.segmentWindow.type
});

const mapDispatchToProps = (dispatch) => ({
    closeWindow: () => dispatch(minimizeSegment())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SegmentWindow)