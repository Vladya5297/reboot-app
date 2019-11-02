import React from 'react'
import Header from '../Header/Header'
import HeaderButton from '../HeaderButton/HeaderButton'
import AddButton from '../AddButton/AddButton'

const HeaderContainer = (props) => {
    // создаём массив кнопок, поле id требуется для метода map
  let rightButtons = [
    {id: "1", icon: "@", text: "Jopa"},
    {id: "2", icon: "@", text: "Jopa"},
    {id: "3", icon: "@", text: "Jopa"},
  ];

  rightButtons = rightButtons.map((elem)=>{
    return (<HeaderButton
    key={elem.id}
    icon={elem.icon}
    text={elem.text} />);
  });

  return (
    <Header>
        <HeaderButton icon="@" text="CROC" />
        {rightButtons}
        <AddButton icon="+" text="СТИКЕР" />
    </Header>
  )
}

export default HeaderContainer;