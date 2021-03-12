import { Movie } from '../../../../api/accountAPI/types';
import Preloader from '../../../../common/Preloader';
import FavoriteItem from './FavoriteItem';

type Props = {
  favoriteList: Array<Movie>,
  isLoading: boolean,
  lastListElementRef: (node: HTMLDivElement) => void,
  handleRemoveFavoriteItem: (id: number) => void,
};

const ProfileFavoriteList = ({
  favoriteList,
  isLoading,
  lastListElementRef,
  handleRemoveFavoriteItem,
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
              handleRemoveFavoriteItem={handleRemoveFavoriteItem}
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
              handleRemoveFavoriteItem={handleRemoveFavoriteItem}
            />
          );
        }
      })}
      {isLoading && <Preloader />}
    </div>
  );
};

export default ProfileFavoriteList;
