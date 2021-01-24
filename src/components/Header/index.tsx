import React from 'react';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <HeaderLogo />
      <HeaderSearch />
    </header>
  );
};

export default Header;
