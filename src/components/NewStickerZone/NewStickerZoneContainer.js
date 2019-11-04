import { connect } from 'react-redux'
import NewStickerZone from './NewStickerZone'

const mapStateToProps = (state) => ({
    sticker: state.stickers.array.filter(
        (elem)=>{return elem.type === "NewSticker"}
    )
});

export default connect(mapStateToProps)(NewStickerZone);