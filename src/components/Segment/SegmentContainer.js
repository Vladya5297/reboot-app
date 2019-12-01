import { connect } from 'react-redux'
import Segment from './Segment'

const mapStateToProps = (state, ownProps) => ({
    stickers: state.stickers.array.filter((elem)=>{
        return elem.type === ownProps.type
    })
});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Segment);