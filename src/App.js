import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Exercise from './components/Exercise';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ex:id">
            <Exercise />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
