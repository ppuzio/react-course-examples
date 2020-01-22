import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardList from './components/CardList';
import Details from './components/Details';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
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
