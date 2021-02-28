import FavoriteButton from './FavoriteButton';

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
    </div>
  );
};

export default PosterButtons;
