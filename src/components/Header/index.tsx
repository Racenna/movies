import { useContext } from 'react';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import AuthorizationButton from './AuthorizationButton/AuthorizationButton';
import ProfileButton from './ProfileButton/ProfileButton';
import { SessionContext } from '../../contexts/SessionContext';
import { authenticationAPI } from '../../api/authenticationAPI/authenticationAPI';
import './Header.scss';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { session_id, signOut } = useContext(SessionContext);
  const location = useLocation();

  const handleSignIn = async () => {
    localStorage.setItem(
      'pageBeforeSignIn',
      `http://localhost:3000${location.pathname}`
    );
    const request_token = await authenticationAPI.getRequestToken();
    window.location.href = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=http://localhost:3000/approved`;
  };
  return (
    <header className="header">
      <HeaderMenu />
      <HeaderLogo />
      <HeaderSearch />
      <div className="header-authorization">
        {!session_id ? (
          <AuthorizationButton handleSignIn={handleSignIn} />
        ) : (
          <ProfileButton signOut={signOut} />
        )}
      </div>
    </header>
  );
};

export default Header;
