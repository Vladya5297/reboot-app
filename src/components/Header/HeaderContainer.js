import React from 'react'
import Header from './Header'
import HeaderButton from '../HeaderButton/HeaderButton'
import AddButton from '../AddButton/AddButtonContainer'

import saveIcon from '../../icons/iconsSVG/SaveIcon.svg'
import playIcon from '../../icons/iconsSVG/ContinueIcon.svg'
import plusIcon from '../../icons/iconsSVG/PlusIcon.svg'
import backArrowIcon from '../../icons/iconsSVG/BackArrowIcon.svg'
import accountIcon from '../../icons/iconsSVG/AccountIcon.svg'

const HeaderContainer = (props) => {
    // создаём массив кнопок, поле id требуется для метода map
  let rightButtons = [
    {id: "1", icon: playIcon, text: "Продолжить"},
    {id: "2", icon: saveIcon, text: "Сохранить"},
    {id: "3", icon: accountIcon, text: ""},
  ];

  rightButtons = rightButtons.map((elem)=>{
    return (<HeaderButton
        key={elem.id}
        icon={elem.icon}
        text={elem.text} 
      />);
  });

  return (
    <Header>
        <HeaderButton icon={backArrowIcon} text="Назад" />
        {rightButtons}
        <AddButton icon={plusIcon} text="СТИКЕР" />
    </Header>
  )
}

export default HeaderContainer;