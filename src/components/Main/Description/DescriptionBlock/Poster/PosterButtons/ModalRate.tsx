import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  const maxStar = 10;
  const result: Array<JSX.Element> = [];

  for (let value = maxStar; value > 0; value--) {
    result.push(
      <FontAwesomeIcon
        key={value}
        className={`rating-star ${value <= rating ? 'rated' : ''}`}
        icon={['fas', 'star']}
        onClick={() => handleRate(value)}
      />
    );
  }

  return (
    <div
      className={`modal-window ${isActive ? 'active' : ''}`}
      onClick={() => {
        handleActive(false);
      }}
    >
      <div
        className="modal-rating"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="rating-title">Set your rating</div>
        <div className="rating-items">
          {result}
          <FontAwesomeIcon
            className="remove-rating"
            icon={['fas', 'minus-square']}
            onClick={handleDeleteRating}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalRate;
