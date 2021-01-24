import React from 'react';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className="header">
      <HeaderLogo />
      <HeaderSearch />
    </div>
  );
};

export default Header;
