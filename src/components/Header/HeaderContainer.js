import React from 'react'
import Header from './Header'
import HeaderButton from '../HeaderButton/HeaderButton'
import AddButton from '../AddButton/AddButtonContainer'

import save from '../../icons/iconsSVG/save.svg'
import play from '../../icons/iconsSVG/ПродолжитьИконка.svg'
import plus from '../../icons/iconsSVG/ПлюсикИконка.svg'
import croc from '../../icons/crock.png'
import girl from '../../icons/iconsSVG/ДевахаИконка.svg'

const HeaderContainer = (props) => {
    // создаём массив кнопок, поле id требуется для метода map
  let rightButtons = [
    {id: "1", icon: play, text: " Продолжить"},
    {id: "2", icon: save, text: " Сохранить"},
    {id: "3", icon: girl, text: ""},
  ];

  rightButtons = rightButtons.map((elem)=>{
    return (<HeaderButton
        key={elem.id}
        icon={elem.icon}
        text={elem.text} />);
  });

  return (
    <Header>
        <HeaderButton icon={croc} />
        {rightButtons}
        <AddButton icon= "" text="СТИКЕР" />
    </Header>
  )
}

export default HeaderContainer;