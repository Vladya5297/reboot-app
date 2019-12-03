import MainArea from './MainArea';
import { connect } from 'react-redux'
import { changeField, changeFieldText } from '../../../store/actionCreators'

const mapStateToProps = (state) => ({
  value: state.fieldValues[state.currentField],
  currentField: state.currentField,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (field) => { dispatch(changeField(field)) },
  changeFieldText: (field, text) => { dispatch(changeFieldText(field, text))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainArea);