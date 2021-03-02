import { FavoriteMovie } from '../../../../api/accountAPI/types';
import Preloader from '../../../../common/Preloader';
import FavoriteItem from './FavoriteItem';

type Props = {
  favoriteList: Array<FavoriteMovie>,
  isLoading: boolean,
};

const ProfileFavoriteList = ({ favoriteList, isLoading }: Props) => {
  if (isLoading) return <Preloader />;

  return (
    <div className="profile-list-items">
      {favoriteList.map((item) => (
        <FavoriteItem key={item.id} title={item.title} />
      ))}
    </div>
  );
};

export default ProfileFavoriteList;
