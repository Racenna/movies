import FavoriteButton from './FavoriteButton';
import WatchListButton from './WatchListButton';
import RateButton from './RateButton';
import ListButton from './ListButton';

type Props = {
  isFavorite: boolean,
  isWatchList: boolean,
  handleFavorite: (isFavorite: boolean) => void,
  handleWatchList: (isWatchList: boolean) => void,
};

const PosterButtons = ({
  isFavorite,
  isWatchList,
  handleFavorite,
  handleWatchList,
}: Props) => {
  return (
    <div className="poster-buttons">
      <FavoriteButton isFavorite={isFavorite} handleFavorite={handleFavorite} />
      <WatchListButton
        isWatchList={isWatchList}
        handleWatchList={handleWatchList}
      />
      <RateButton />
      <ListButton />
    </div>
  );
};

export default PosterButtons;
