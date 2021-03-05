import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { accountAPI } from '../../../api/accountAPI/accountAPI';
import noImage from '../../../assets/svg/no_image.svg';

type Props = {
  session_id: string,
  handleSignOut: () => void,
};

const ProfileButton = ({ session_id, handleSignOut }: Props) => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);
  const active = isActive ? 'active' : '';

  const divEl = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    if (divEl.current) {
      if (e.target instanceof HTMLElement && divEl.current.contains(e.target)) {
        return;
      }
    }

    setIsActive(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [divEl]);

  useEffect(() => {
    accountAPI.getAccount(session_id).then((res) => {
      setAvatar(res.avatar.tmdb.avatar_path);
    });
  }, [session_id]);

  return (
    <div ref={divEl} className="profile-button">
      <img
        className="avatar"
        src={avatar ? process.env.REACT_APP_IMG_BASE_URL + avatar : noImage}
        onClick={() => {
          setIsActive(true);
        }}
      />
      <ul className={`dropdown-menu ${active}`}>
        <li>
          <NavLink to="/profile" onClick={() => setIsActive(false)}>
            Profile
          </NavLink>
        </li>
        <li onClick={handleSignOut}>Logout</li>
      </ul>
    </div>
  );
};

export default ProfileButton;
