import React from 'react'
import Header from './Header'
import logo from '../../icons/iconsSVG/Logo.svg'
import Button from '../Button/Button'
import { connect } from 'react-redux'

const HeaderContainer = (props) => {
  return (
    <Header>
      <img src={logo} alt="Logo" />
      <> </>
      <>
        <Button isAccent={false}>Сохранить черновик</Button>
        <Button isAccent={true}>Продолжить</Button>
      </>
    </Header>
  )
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);