import { NavLink } from 'react-router-dom';

const ProfileNavigation = () => {
  return (
    <div className="profile-navigation">
      <NavLink className="navigation-item" to="/profile/favorite" exact>
        Favorite
      </NavLink>
      <NavLink className="navigation-item" to="/profile/watch-list" exact>
        Watch list
      </NavLink>
      <NavLink className="navigation-item" to="/profile/rated" exact>
        Rated
      </NavLink>
      <NavLink className="navigation-item" to="/profile/lists" exact>
        Lists
      </NavLink>
    </div>
  );
};

export default ProfileNavigation;
