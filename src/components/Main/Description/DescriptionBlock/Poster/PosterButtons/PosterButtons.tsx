import FavoriteButton from './FavoriteButton';
import WatchListButton from './WatchListButton';
import RateButton from './RateButton/RateButton';
import ListButton from './ListButton/ListButton';

type Props = {
  isFavorite: boolean,
  isWatchList: boolean,
  rating: number,
  handleFavorite: (isFavorite: boolean) => void,
  handleWatchList: (isWatchList: boolean) => void,
  handleRate: (value: number) => void,
  handleDeleteRating: () => void,
};

const PosterButtons = ({
  isFavorite,
  isWatchList,
  rating,
  handleFavorite,
  handleWatchList,
  handleRate,
  handleDeleteRating,
}: Props) => {
  return (
    <div className="poster-buttons">
      <FavoriteButton isFavorite={isFavorite} handleFavorite={handleFavorite} />
      <WatchListButton
        isWatchList={isWatchList}
        handleWatchList={handleWatchList}
      />
      <RateButton
        rating={rating}
        handleRate={handleRate}
        handleDeleteRating={handleDeleteRating}
      />
      <ListButton />
    </div>
  );
};

export default PosterButtons;
