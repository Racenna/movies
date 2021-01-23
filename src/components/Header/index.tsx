import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <span>Logo</span>
      </div>
      <div className="header-search">
        <div className="header-search-box">
          <input type="text" placeholder="search..." />
        </div>
        <div className="header-search-radial-gradient"></div>
      </div>
    </div>
  );
};

export default Header;
