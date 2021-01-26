import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <HeaderMenu />
      <HeaderLogo />
      <HeaderSearch />
    </header>
  );
};

export default Header;
