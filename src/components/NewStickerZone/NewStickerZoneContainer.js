import { connect } from 'react-redux'

import NewStickerZone from './NewStickerZone'

const mapStateToProps = (state) => ({
    sticker: state.stickers.array
});

export default connect(mapStateToProps)(NewStickerZone);