import { useContext } from 'react';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import AuthorizationButton from './AuthorizationButton/AuthorizationButton';
import ProfileButton from './ProfileButton/ProfileButton';
import { SessionContext } from '../../contexts/SessionContext';
import './Header.scss';

const Header = () => {
  const { session_id, signIn, signOut } = useContext(SessionContext);
  return (
    <header className="header">
      <HeaderMenu />
      <HeaderLogo />
      <HeaderSearch />
      <div className="header-authorization">
        {!session_id ? (
          <AuthorizationButton signIn={signIn} />
        ) : (
          <ProfileButton signOut={signOut} />
        )}
      </div>
    </header>
  );
};

export default Header;
