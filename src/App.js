import React from 'react';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import EditFormPage from './pages/EditFormPage/EditFormPage';
import { Switch, Route } from 'react-router-dom';

function App () {

  // вывод страниц
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/edit-form" exact component={EditFormPage} />
      </Switch>
    </div>
  );
}

export default App;
