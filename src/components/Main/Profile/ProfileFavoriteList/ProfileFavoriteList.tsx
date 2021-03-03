import { FavoriteMovie } from '../../../../api/accountAPI/types';
import Preloader from '../../../../common/Preloader';
import FavoriteItem from './FavoriteItem';

type Props = {
  favoriteList: Array<FavoriteMovie>,
  isLoading: boolean,
  lastListElementRef: (node: HTMLDivElement) => void,
  removeFavoriteItem: (id: number) => void,
};

const ProfileFavoriteList = ({
  favoriteList,
  isLoading,
  lastListElementRef,
  removeFavoriteItem,
}: Props) => {
  return (
    <div className="profile-list-items">
      {favoriteList.map((item, index) => {
        if (favoriteList.length === index + 1) {
          return (
            <FavoriteItem
              key={item.id}
              id={item.id}
              title={item.title}
              poster_path={item.poster_path}
              release_date={item.release_date}
              lastListElementRef={lastListElementRef}
              removeFavoriteItem={removeFavoriteItem}
            />
          );
        } else {
          return (
            <FavoriteItem
              key={item.id}
              id={item.id}
              title={item.title}
              poster_path={item.poster_path}
              release_date={item.release_date}
              removeFavoriteItem={removeFavoriteItem}
            />
          );
        }
      })}
      {isLoading && <Preloader />}
    </div>
  );
};

export default ProfileFavoriteList;
