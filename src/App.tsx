import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Recommended from './components/Main/Recommended';
import './App.scss';

const App = () => {
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
            <Recommended />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
