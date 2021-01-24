import React from 'react';
import Header from './components/Header';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="navbar">NAVBAR</div>
      <div className="main">CONTENT</div>
    </div>
  );
};

export default App;
