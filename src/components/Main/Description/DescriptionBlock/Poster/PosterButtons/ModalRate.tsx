import StarRating from '../../../../../../common/StarRating';

type Props = {
  isActive: boolean,
  rating: number,
  handleActive: (activeState: boolean) => void,
  handleRate: (value: number) => void,
  handleDeleteRating: () => void,
};

const ModalRate = ({
  isActive,
  rating,
  handleActive,
  handleRate,
  handleDeleteRating,
}: Props) => {
  return (
    <div
      className={`modal-window ${isActive ? 'active' : ''}`}
      onClick={() => {
        handleActive(false);
      }}
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
