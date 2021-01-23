import React from 'react';
import Header from './components/Header';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="navbar"></div>
      <div className="main"></div>
    </div>
  );
};

export default App;
