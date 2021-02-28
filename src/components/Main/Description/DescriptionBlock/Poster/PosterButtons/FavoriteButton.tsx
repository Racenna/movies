import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  isFavorite: boolean,
  favoriteHandler: (isFavorite: boolean) => void,
};

const FavoriteButton = ({ isFavorite, favoriteHandler }: Props) => {
  return (
    <FontAwesomeIcon
      className={`like-button ${isFavorite ? 'active' : ''}`}
      icon={['fas', 'heart']}
      onClick={() => favoriteHandler(!isFavorite)}
    />
  );
};

export default FavoriteButton;
