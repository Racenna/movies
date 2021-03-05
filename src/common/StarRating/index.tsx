import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

type Props = {
  rating: number,
  handleRate: (value: number) => void | ((value: number, id: number) => void),
  handleDeleteRating?: () => void | ((id: number) => void),
};

const StarRating = ({ rating, handleRate, handleDeleteRating }: Props) => {
  const result: Array<JSX.Element> = [];

  for (let value = 10; value > 0; value--) {
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
      className="rating-wrapper"
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
  );
};

export default StarRating;
