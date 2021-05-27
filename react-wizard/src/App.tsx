import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Wizard } from './components/wizard/wizard';
import { Home } from './components/home/home';
import { Header } from './components/header/header';

export const App = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/Home" exact><Home /></Route>
        <Route path="/wizard/:id" exact><Wizard /></Route>
      </Switch>
    </Router>
    
  );
}
