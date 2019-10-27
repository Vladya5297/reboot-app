import React from 'react';
import Header from './Header/Header'
import HeaderButton from './HeaderButton/HeaderButton'
import './App.css';
import AddButton from './AddButton/AddButton';
import TwiceArea from "./TwiceArea/TwiceArea";

function App() {
  const left = [{id: "1", icon: "@", text: "Jopa"}];
  const right = ["start", "launch", "account"];
  return (
    <div className="App">
        <Header
    left={
        left.map((elem) => {
            return <HeaderButton
                key={elem.id}
                icon={elem.icon}
                text={elem.text}>
            </HeaderButton>;
        })
    }
    right={right.map((elem) => <div style={{padding: 5 + 'px'}}>{elem}</div>)}
    />
      <AddButton
      />
      <TwiceArea/>

    </div>
  );
}

export default App;
