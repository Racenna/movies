import React from 'react';

const HeaderSearch: React.FC = () => {
  return (
    <div className="header-search">
      <div className="header-search-box">
        <input type="text" placeholder="search..." />
      </div>
      <div className="header-search-radial-gradient"></div>
    </div>
  );
};

export default HeaderSearch;
