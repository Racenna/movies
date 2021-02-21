import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import AuthorizationButton from './AuthorizationButton/AuthorizationButton';
import ProfileButton from './ProfileButton/ProfileButton';
import { SessionContext } from '../../contexts/SessionContext';
import { authenticationAPI } from '../../api/authenticationAPI/authenticationAPI';
import './Header.scss';

const Header = () => {
  const { session_id, signOut } = useContext(SessionContext);
  const location = useLocation();

  const handleSignIn = async () => {
    const request_token = await authenticationAPI.getRequestToken();
    localStorage.setItem('prevPage', location.pathname + location.search);
    window.location.href = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=${process.env.REACT_APP_URL}/approved`;
  };

  const handleSignOut = async () => {
    if (!session_id) return;

    const isSuccess = await authenticationAPI.deleteSession(session_id);

    if (isSuccess) signOut();
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
          <ProfileButton handleSignOut={handleSignOut} />
        )}
      </div>
    </header>
  );
};

export default Header;
