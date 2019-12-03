import MainArea from './MainArea';
import { connect } from 'react-redux'
import { changeField } from '../../../store/actionCreators'

const mapStateToProps = (state) => ({
  value: state.fieldValues[state.currentField]
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (field) => { dispatch(changeField(field)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainArea);