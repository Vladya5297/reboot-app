import MainArea from './MainArea';
import { connect } from 'react-redux'
import fieldsProps from '../../../store/formFields'

const mapStateToProps = (state) => ({
  value: (() => {
    const stickers = [];
    const fieldType = fieldsProps[state.currentField].type;
    for (let type of fieldType) {
      stickers.push(...state.stickers.array.filter(sticker =>
        sticker.type === type)
      )
    }
    return stickers.map(sticker => sticker.content).join("\n\n");
  })()
});

export default connect(
  mapStateToProps
)(MainArea);