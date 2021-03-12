import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarRating from '../../../../common/StarRating';

type Props = {
  title: string,
  poster_path: string | null,
  release_date: string,
  id: number,
  rating: number,
  lastListElementRef?: (node: HTMLDivElement) => void,
  handleRateItem: (value: number, id: number) => void,
  handleDeleteRatingItem: (id: number) => void,
};
const RatedListItem = ({
  title,
  poster_path,
  release_date,
  id,
  rating,
  lastListElementRef,
  handleRateItem,
  handleDeleteRatingItem,
}: Props) => {
  const [isActive, setIsActive] = useState(false);

  const poster = poster_path ? (
    <img src={`${process.env.REACT_APP_IMG_BASE_URL}${poster_path}`} />
  ) : (
    <div className="empty-poster">No Image</div>
  );
  const date = release_date ? release_date.slice(0, 4) : '';
  return (
    <div className="item" ref={lastListElementRef}>
      <NavLink to={`/movie/description/${id}`} className="item-image">
        {poster}
      </NavLink>
      <div className="item-description">
        <div className="item-description-title">
          <NavLink to={`/movie/description/${id}`}>{title}</NavLink>
          <FontAwesomeIcon
            className="remove-button"
            title="remove from rated list"
            icon={['fas', 'trash-alt']}
            onClick={() => handleDeleteRatingItem(id)}
          />
        </div>
        <div className="item-description-release">{date}</div>
        <div>
          <FontAwesomeIcon
            className="rate-button"
            title="set rating"
            icon={['fas', 'star']}
            onClick={() => setIsActive(true)}
          />
        </div>
      </div>
      <div
        className={`modal-window ${isActive ? 'active' : ''}`}
        onClick={() => {
          setIsActive(false);
        }}
      >
        <StarRating
          rating={rating}
          handleRate={(value: number) => handleRateItem(value, id)}
          handleDeleteRating={() => handleDeleteRatingItem(id)}
        />
      </div>
    </div>
  );
};

export default RatedListItem;
