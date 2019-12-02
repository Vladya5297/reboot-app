import React from 'react';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import { Switch, Route } from 'react-router-dom'

function App(props) {

  // вывод страницы
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
