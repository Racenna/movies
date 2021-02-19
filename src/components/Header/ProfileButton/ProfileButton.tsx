import noImage from '../../../assets/svg/no_image.svg';

type Props = {
  handleSignOut: () => void,
};

const ProfileButton = ({ handleSignOut }: Props) => {
  return <img className="avatar" src={noImage} onClick={handleSignOut} />;
};

export default ProfileButton;
