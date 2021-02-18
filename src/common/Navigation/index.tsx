import { NavLink } from 'react-router-dom';
import './style.scss';

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/profile" activeClassName="active">
          Profile
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
