import FavoriteButton from './FavoriteButton';
import WatchListButton from './WatchListButton';
import RateButton from './RateButton/RateButton';
import ListButton from './ListButton/ListButton';
import { CustomList } from '../../../../../../api/accountAPI/types';

type Props = {
  isFavorite: boolean,
  isWatchList: boolean,
  rating: number,
  customLists: Array<CustomList>,
  release_date: string,
  handleFavorite: (isFavorite: boolean) => void,
  handleWatchList: (isWatchList: boolean) => void,
  handleRate: (value: number) => void,
  handleDeleteRating: () => void,
  handleAddToList: (id: number | string, name: string) => void,
};

const PosterButtons = ({
  isFavorite,
  isWatchList,
  rating,
  customLists,
  release_date,
  handleFavorite,
  handleWatchList,
  handleRate,
  handleDeleteRating,
  handleAddToList,
}: Props) => {
  return (
    <div className="poster-buttons">
      <FavoriteButton isFavorite={isFavorite} handleFavorite={handleFavorite} />
      <WatchListButton
        isWatchList={isWatchList}
        handleWatchList={handleWatchList}
      />
      {new Date() > new Date(release_date) && (
        <RateButton
          rating={rating}
          handleRate={handleRate}
          handleDeleteRating={handleDeleteRating}
        />
      )}
      <ListButton customLists={customLists} handleAddToList={handleAddToList} />
    </div>
  );
};

export default PosterButtons;
