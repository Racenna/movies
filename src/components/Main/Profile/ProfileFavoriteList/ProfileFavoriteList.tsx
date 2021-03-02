import { FavoriteMovie } from '../../../../api/accountAPI/types';
import Preloader from '../../../../common/Preloader';
import FavoriteItem from './FavoriteItem';

type Props = {
  favoriteList: Array<FavoriteMovie>,
  isLoading: boolean,
  lastListElementRef: (node: HTMLDivElement) => void,
};

const ProfileFavoriteList = ({
  favoriteList,
  isLoading,
  lastListElementRef,
}: Props) => {
  return (
    <div className="profile-list-items">
      {favoriteList.map((item, index) => {
        if (favoriteList.length === index + 1) {
          return (
            <FavoriteItem
              key={item.id}
              title={item.title}
              lastListElementRef={lastListElementRef}
            />
          );
        } else {
          return <FavoriteItem key={item.id} title={item.title} />;
        }
      })}
      {isLoading && <Preloader />}
    </div>
  );
};

export default ProfileFavoriteList;
