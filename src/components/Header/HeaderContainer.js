import React from 'react'
import Header from './Header'
import logo from '../../icons/iconsSVG/Logo.svg'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import { addSticker } from '../../store/actionCreators'
import { newSticker } from '../../store/itemTypes'


const HeaderContainer = (props) => {
  let isActive = !props.stickers.length;
  return (
    <Header>
      <img src={logo} alt="Logo" />
      <Button isAccent={false} clickHandler={isActive ? props.addSticker : undefined}>
          Добавить стикер
      </Button>
      <Button isAccent={true}>Сохранить и продолжить</Button>
    </Header>
  )
}

const mapStateToProps = (state) => ({
  stickers: state.stickers.array.filter((elem) => {
    return elem.type === newSticker
  })
});

const mapDispatchToProps = (dispatch) => ({
  addSticker: () => dispatch(addSticker()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);