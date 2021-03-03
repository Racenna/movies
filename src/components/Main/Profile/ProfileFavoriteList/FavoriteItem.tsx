import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  title: string,
  poster_path: string | null,
  release_date: string,
  id: number,
  lastListElementRef?: (node: HTMLDivElement) => void,
  removeFavoriteItem: (id: number) => void,
};

const FavoriteItem = ({
  title,
  poster_path,
  release_date,
  id,
  lastListElementRef,
  removeFavoriteItem,
}: Props) => {
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
        </div>
        <div className="item-description-release">{date}</div>
        <div>
          <FontAwesomeIcon
            className="like-button"
            icon={['fas', 'heart']}
            onClick={() => removeFavoriteItem(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
