import { connect } from 'react-redux'
import Segment from './Segment'

const mapStateToProps = (state, ownProps) => ({
    stickers: state.stickers.array.filter((elem)=>{
        return elem.type === ownProps.type
    })
});

export default connect(
    mapStateToProps
)(Segment);