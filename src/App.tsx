import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Trending from './components/Main/Trending';
import Description from './components/Main/Description';
import Profile from './components/Main/Profile';
import Approve from './components/Main/Approve/Approve';
import SessionContextProvider from './contexts/SessionContext';
import ProtectedRoute from './common/ProtectedRoute';
import './App.scss';

const App = () => {
  return (
    <Router>
      <SessionContextProvider>
        <div className="App">
          <Header />
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Redirect to="/trending" />}
            />
            <ProtectedRoute
              path="/profile/:typeList?"
              component={Profile}
              exact={false}
            />
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
