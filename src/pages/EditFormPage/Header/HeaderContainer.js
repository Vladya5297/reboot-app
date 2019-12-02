import React from 'react'
import Header from '../../../components/Header/Header'
import logo from '../../../icons/iconsSVG/Logo.svg'
import Button from '../../../components/Button/Button'

const HeaderContainer = (props) => {
    return (
        <Header>
            <img src={logo} alt="Logo" />
            <> </>
            <Button isAccent={true} clickHandler={() => { alert("Подано") }}>Подать идею</Button>
        </Header>
    )
}

export default HeaderContainer;