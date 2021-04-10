import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import SessionContextProvider from './contexts/SessionContext';
import ProtectedRoute from './common/ProtectedRoute';
import Preloader from './common/Preloader';
import Header from './components/Header';
import Trending from './components/Main/Trending';
import Description from './components/Main/Description';
import People from './components/Main/People';

const ListDetail = React.lazy(
  () => import('./components/Main/List/ListDetail')
);
const CreateList = React.lazy(
  () => import('./components/Main/List/CreateList')
);

const Profile = React.lazy(() => import('./components/Main/Profile'));
const Approve = React.lazy(() => import('./components/Main/Approve/Approve'));
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <SessionContextProvider>
        <div className="App">
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Redirect to="/trending" />}
            />
            <ProtectedRoute
              path="/profile/:typeList"
              component={() => (
                <Suspense fallback={<Preloader />}>
                  <Profile />
                </Suspense>
              )}
            />
            <ProtectedRoute
              path="/list/:listId"
              component={() => (
                <Suspense fallback={<Preloader />}>
                  <ListDetail />
                </Suspense>
              )}
              exact={true}
            />
            <ProtectedRoute
              path="/create-list"
              component={() => (
                <Suspense fallback={<Preloader />}>
                  <CreateList />
                </Suspense>
              )}
              exact={true}
            />
            <Route path="/people/:people_id" component={People} exact />
            <Route
              exact
              path="/approved"
              component={() => (
                <Suspense fallback={<Preloader />}>
                  <Approve />
                </Suspense>
              )}
            />
            <Route exact path="/trending" component={Trending} />
            <Route
              path="/movie/description/:movie_id"
              component={Description}
            />
            <Route path="*">
              <Redirect to="/trending" />
            </Route>
          </Switch>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          newestOnTop
          transition={Zoom}
        />
      </SessionContextProvider>
    </Router>
  );
};

export default App;
