import React from 'react'
import Header from './Header'
import logo from '../../icons/iconsSVG/Logo.svg'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import * as types from '../../store/itemTypes'
import { NavLink } from 'react-router-dom'

const HeaderContainer = (props) => {
  return (
    <Header>
      <img src={logo} alt="Logo" />
      <> </>
      <>
        <Button isAccent={false} clickHandler={() => { alert("Сохранено") }}>Сохранить черновик</Button>
        <Button isAccent={true} disabled={props.disabled}>
          <NavLink to="/a"
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
  })()
});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);