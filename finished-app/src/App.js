import React from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <Header title="Pokedex" />
      <Switch>
        <Route exact path="/">
          <CardList />
        </Route>
        <Route path="/pokemon/:id">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
