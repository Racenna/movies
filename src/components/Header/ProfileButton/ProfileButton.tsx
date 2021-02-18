import noImage from '../../../assets/svg/no_image.svg';

type Props = {
  signOut: () => void,
};

const ProfileButton = ({ signOut }: Props) => {
  return <img className="avatar" src={noImage} onClick={signOut} />;
};

export default ProfileButton;
