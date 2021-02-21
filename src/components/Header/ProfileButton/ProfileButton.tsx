import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import noImage from '../../../assets/svg/no_image.svg';

type Props = {
  handleSignOut: () => void,
};

const ProfileButton = ({ handleSignOut }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const active = isActive ? 'active' : '';
  console.log(() => {
    handleSignOut;
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const node = useRef<any>();

  const handleClick = (e: MouseEvent) => {
    if (node.current.contains(e.target)) {
      return;
    }

    setIsActive(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [node]);

  return (
    <div ref={node} className="profile-button">
      <img
        className="avatar"
        src={noImage}
        onClick={() => {
          setIsActive(true);
        }}
      />
      <ul className={`dropdown-menu ${active}`}>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li onClick={handleSignOut}>Logout</li>
      </ul>
    </div>
  );
};

export default ProfileButton;
