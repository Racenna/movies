import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/genres">
            <div className="main">Genres</div>
          </Route>
          <Route exact path="/categories">
            <div className="main">Categories</div>
          </Route>
          <Route exact path="/recommended">
            <div className="main">Recommended</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
