import { connect } from 'react-redux'
import {newSticker} from '../../store/itemTypes'
import NewStickerZone from './NewStickerZone'

const mapStateToProps = (state) => ({
    sticker: state.stickers.array.filter(
        (elem)=>{return elem.type === newSticker && !elem.transparent}
    )[0]
});

export default connect(mapStateToProps)(NewStickerZone);