import React from 'react';
import Header from './Header/Header'
import HeaderButton from './HeaderButton/HeaderButton'
import AddButton from './AddButton/AddButton'
import MainArea from './MainArea/MainAreaContainer'
import './App.css';

function App() {
  // создаём массив кнопок, поле id требуется для метода map
  let buttons = [{id: "1", icon: "@", text: "Jopa"},
  {id: "2", icon: "@", text: "Jopa"},
  {id: "3", icon: "@", text: "Jopa"},
  {id: "4", icon: "@", text: "Jopa"}];

  buttons = buttons.map((elem)=>{
    return (<HeaderButton
    key={elem.id}
    icon={elem.icon}
    text={elem.text} />);
  });

  buttons.push(<AddButton key="5" icon="+" text="СТИКЕР"
  ></AddButton>)

  // вывод страницы
  return (
    <div className="App">
        <Header leftElemCount = {1}>
          {buttons}
        </Header>
        <MainArea />
    </div>
  );
}

export default App;
