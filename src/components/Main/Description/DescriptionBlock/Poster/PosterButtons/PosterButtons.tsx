import FavoriteButton from './FavoriteButton';
import WatchListButton from './WatchListButton';
import RateButton from './RateButton';
import ListButton from './ListButton';

type Props = {
  isFavorite: boolean,
  favoriteHandler: (isFavorite: boolean) => void,
};

const PosterButtons = ({ isFavorite, favoriteHandler }: Props) => {
  return (
    <div className="poster-buttons">
      <FavoriteButton
        isFavorite={isFavorite}
        favoriteHandler={favoriteHandler}
      />
      <WatchListButton />
      <RateButton />
      <ListButton />
    </div>
  );
};

export default PosterButtons;
