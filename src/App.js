import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import MainPage from './components/MainPage/MainPage';

function App() {

  // вывод страницы
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/idea-presentation' exact component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
