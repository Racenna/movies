import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Trending from './components/Main/Trending';
import Description from './components/Main/Description';
import Profile from './components/Main/Profile/Profile';
import Approve from './components/Main/Approve/Approve';
import SessionContextProvider from './contexts/SessionContext';
import './App.scss';

const App = () => {
  return (
    <Router>
      <SessionContextProvider>
        <div className="App">
          <Header />
          <Navbar />
          <Switch>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/approved" component={Approve} />
            <Route exact path="/trending" component={Trending} />
            <Route
              path="/movie/description/:movie_id"
              component={Description}
            />
          </Switch>
        </div>
      </SessionContextProvider>
    </Router>
  );
};

export default App;
