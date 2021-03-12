import { AccountResponse } from '../../../../api/accountAPI/types';
import noImage from '../../../../assets/svg/no_image.svg';

type Props = {
  profile: AccountResponse,
};

const ProfileDetail = ({ profile }: Props) => {
  const avatar = profile.avatar.tmdb.avatar_path
    ? `${process.env.REACT_APP_IMG_BASE_URL}${profile.avatar.tmdb.avatar_path}`
    : noImage;
  return (
    <div className="profile-detail">
      <div className="avatar">
        <img src={avatar} />
      </div>
      <div className="username">{profile.username}</div>
    </div>
  );
};

export default ProfileDetail;
