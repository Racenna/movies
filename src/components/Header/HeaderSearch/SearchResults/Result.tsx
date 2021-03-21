import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

type Props = {
  title: string,
  original_title: string,
  rating: number,
  id: number,
};

const Result = ({ title, original_title, rating, id }: Props) => {
  return (
    <div className="result">
      <NavLink className="result-title" to={`/movie/description/${id}`}>
        {title} / {original_title}
      </NavLink>
      <div className="result-rating">
        <FontAwesomeIcon className="star" icon={['fas', 'star']} />
        {+rating.toFixed(1)}
      </div>
    </div>
  );
};

export default Result;
