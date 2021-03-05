import StarRating from '../../../../../../../common/StarRating';

type Props = {
  isActive: boolean,
  rating: number,
  closeModal: () => void,
  handleRate: (value: number) => void,
  handleDeleteRating: () => void,
};

const ModalRate = ({
  isActive,
  rating,
  closeModal,
  handleRate,
  handleDeleteRating,
}: Props) => {
  return (
    <div
      className={`modal-window ${isActive ? 'active' : ''}`}
      onClick={closeModal}
    >
      <StarRating
        rating={rating}
        handleRate={handleRate}
        handleDeleteRating={handleDeleteRating}
      />
    </div>
  );
};

export default ModalRate;
