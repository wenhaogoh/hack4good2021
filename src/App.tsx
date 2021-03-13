import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Map from './containers/Map';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Map} />
      </Switch>
    </Router>
  );
}

export default App;
