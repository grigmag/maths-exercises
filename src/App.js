import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Exercise from './components/Exercise';
import Category from './components/Category';

import exerciseCategories from './exercises/exerciseCategories';

function App() {
  const categoryRoutes = exerciseCategories.map((cat) => {
    return (
      <Route exact path={'/' + cat.folder} key={cat.key}>
        <Category categoryData={cat} />
      </Route>
    );
  });

  const exerciseRoutes = exerciseCategories.map((cat) => {
    return (
      <Route path={'/' + cat.folder + '/ex:id'} key={cat.key}>
        <Exercise folder={cat.folder} />
      </Route>
    );
  });

  return (
    <HashRouter basename="/">
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {categoryRoutes}
          {exerciseRoutes}
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
