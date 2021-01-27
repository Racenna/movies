import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Popular from './components/Main/Popular';
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
          <Route exact path="/popular">
            <Popular />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
