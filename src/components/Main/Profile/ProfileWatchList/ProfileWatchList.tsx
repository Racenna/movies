import { Movie } from '../../../../api/accountAPI/types';
import Preloader from '../../../../common/Preloader';
import WatchListItem from './WatchListItem';

type Props = {
  watchList: Array<Movie>,
  isLoading: boolean,
  lastListElementRef: (node: HTMLDivElement) => void,
  handleRemoveWatchListItem: (id: number) => void,
};

const ProfileWatchList = ({
  watchList,
  isLoading,
  lastListElementRef,
  handleRemoveWatchListItem,
}: Props) => {
  return (
    <div className="profile-list-items">
      {watchList.map((item, index) => {
        if (watchList.length === index + 1) {
          return (
            <WatchListItem
              key={item.id}
              id={item.id}
              title={item.title}
              poster_path={item.poster_path}
              release_date={item.release_date}
              lastListElementRef={lastListElementRef}
              handleRemoveWatchListItem={handleRemoveWatchListItem}
            />
          );
        } else {
          return (
            <WatchListItem
              key={item.id}
              id={item.id}
              title={item.title}
              poster_path={item.poster_path}
              release_date={item.release_date}
              handleRemoveWatchListItem={handleRemoveWatchListItem}
            />
          );
        }
      })}
      {isLoading && <Preloader />}
    </div>
  );
};

export default ProfileWatchList;
