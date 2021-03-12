import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  isFavorite: boolean,
  handleFavorite: (isFavorite: boolean) => void,
};

const FavoriteButton = ({ isFavorite, handleFavorite }: Props) => {
  return (
    <FontAwesomeIcon
      className={`like-button ${isFavorite ? 'active' : ''}`}
      icon={['fas', 'heart']}
      onClick={() => handleFavorite(!isFavorite)}
    />
  );
};

export default FavoriteButton;
