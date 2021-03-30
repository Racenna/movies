import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { SessionContext } from '../../../../contexts/SessionContext';
import HeaderLogo from '../../HeaderLogo/HeaderLogo';
import MenuButton from '../MenuButton/MenuButton';

type MenuBarType = {
  isActive: boolean,
  activeChange: (value: boolean) => void,
};

const MenuBar = ({ isActive, activeChange }: MenuBarType) => {
  const { session_id } = useContext(SessionContext);

  return (
    <>
      <div className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <div className="menu-header">
          <MenuButton isActive={isActive} activeChange={activeChange} />
          <HeaderLogo />
        </div>
        <div className="menu-navigation-body">
          <nav>
            <ul>
              <li>
                <NavLink
                  onClick={() => {
                    activeChange(false);
                  }}
                  to="/trending?page=1"
                  activeClassName="active-link"
                >
                  <FontAwesomeIcon icon={['fab', 'gripfire']} />
                  Trending
                </NavLink>
              </li>
            </ul>
          </nav>
          {!!session_id && (
            <nav>
              <ul>
                <li>
                  <NavLink
                    onClick={() => activeChange(false)}
                    to="/profile/favorite"
                    activeClassName="active-link"
                  >
                    <FontAwesomeIcon icon={['fas', 'heart']} />
                    Favorite list
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => activeChange(false)}
                    to="/profile/watch-list"
                    activeClassName="active-link"
                  >
                    <FontAwesomeIcon icon={['fas', 'bookmark']} />
                    Watch list
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => activeChange(false)}
                    to="/profile/rated"
                    activeClassName="active-link"
                  >
                    <FontAwesomeIcon icon={['fas', 'star']} />
                    Rated list
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => activeChange(false)}
                    to="/profile/lists"
                    activeClassName="active-link"
                  >
                    <FontAwesomeIcon icon={['fas', 'list']} />
                    Custom lists
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
      <div
        className={`menu-shadow ${isActive ? 'active' : 'inactive'}`}
        onClick={() => {
          activeChange(false);
        }}
      ></div>
    </>
  );
};

export default MenuBar;
