import { useState } from 'react';
import FavoriteButton from './FavoriteButton';
import WatchListButton from './WatchListButton';
import RateButton from './RateButton';
import ListButton from './ListButton';
import ModalRate from './ModalRate';

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
  const [isActive, setIsActive] = useState(false);

  const handleActive = (activeState: boolean) => {
    setIsActive(activeState);
  };
  return (
    <div className="poster-buttons">
      <FavoriteButton isFavorite={isFavorite} handleFavorite={handleFavorite} />
      <WatchListButton
        isWatchList={isWatchList}
        handleWatchList={handleWatchList}
      />
      <RateButton rating={rating} handleActive={handleActive} />
      <ListButton />
      <ModalRate
        rating={rating}
        isActive={isActive}
        handleActive={handleActive}
        handleRate={handleRate}
        handleDeleteRating={handleDeleteRating}
      />
    </div>
  );
};

export default PosterButtons;
