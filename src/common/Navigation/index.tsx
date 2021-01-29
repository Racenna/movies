import { NavLink } from 'react-router-dom';
import './style.scss';

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/genres" activeClassName="active">
          Genres
        </NavLink>
      </li>
      <li>
        <NavLink to="/categories" activeClassName="active">
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink to="/trending" activeClassName="active">
          Trending
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
