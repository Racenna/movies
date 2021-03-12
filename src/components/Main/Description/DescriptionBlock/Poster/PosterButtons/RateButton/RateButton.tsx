import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ModalRate from './ModalRate';

type Props = {
  rating: number,
  handleRate: (value: number) => void,
  handleDeleteRating: () => void,
};

const RateButton = ({ rating, handleRate, handleDeleteRating }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <FontAwesomeIcon
        className={`rate-button ${rating > 0 ? 'active' : ''}`}
        icon={['fas', 'star']}
        onClick={() => setIsActive(true)}
      />
      <ModalRate
        isActive={isActive}
        rating={rating}
        closeModal={() => setIsActive(false)}
        handleRate={handleRate}
        handleDeleteRating={handleDeleteRating}
      />
    </>
  );
};

export default RateButton;
