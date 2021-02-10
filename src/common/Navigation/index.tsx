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
        <NavLink to="/trending?page=1" activeClassName="active">
          Trending
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
