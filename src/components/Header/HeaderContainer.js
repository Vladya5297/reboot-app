import React from 'react'
import Header from './Header'
import logo from '../../icons/iconsSVG/Logo.svg'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import * as types from '../../store/itemTypes'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const HeaderContainer = (props) => {
  return (
    <Header>
      <img src={logo} alt="Logo" />
      <> </>
      <>
        <Button isAccent={false} clickHandler={() => { alert("Сохранено") }}>Сохранить черновик</Button>
        <NavLink to="/" 
        className={classes["link-button"]}
        style={{
          pointerEvents: props.disabled ? "none" : "auto",
          opacity: props.disabled ? 0.5 : 1,
          cursor: props.disabled ? "default" : "pointer"
        }}>Сформулировать идею</NavLink>
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