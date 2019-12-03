import React from 'react'
import Header from '../../../components/Header/Header'
import logo from '../../../icons/iconsSVG/Logo.svg'
import Button from '../../../components/Button/Button'
import { connect } from 'react-redux'
import * as types from '../../../store/itemTypes'
import { NavLink } from 'react-router-dom'
import fieldsProps from '../../../store/formFields'
import { changeFieldText } from '../../../store/actionCreators'

const HeaderContainer = (props) => {
  return (
    <Header>
      <img src={logo} alt="Logo" />
      <> </>
      <>
        <Button isAccent={false} clickHandler={() => { alert("Сохранено") }}>Сохранить черновик</Button>
        <Button isAccent={true} disabled={props.disabled}
        clickHandler={()=>{props.fillFields(props.stickers)}}>
          <NavLink to="/edit-form"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%"
            }} />
          Сформулировать идею
          </Button>
      </>
    </Header>
  )
}

const mapStateToProps = (state) => ({
  disabled: (() => {
    for (let type in types) {
      const stickers = state.stickers.array
        .filter(elem => elem.type === type);
      if (!stickers.length) return true;
    }
    return false;
  })(),
  stickers: state.stickers.array
});

const mapDispatchToProps = (dispatch) => ({
  fillFields: (stickers) => {
    for (let field in fieldsProps) {
      const fieldType = fieldsProps[field].type;
      const appropStickers = [];
      for (let type of fieldType) {
        appropStickers.push(...stickers.filter(sticker =>
          sticker.type === type)
        )
      }
      let text = appropStickers.map(sticker => sticker.content).join("\n");
      dispatch(changeFieldText(field, text));
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);