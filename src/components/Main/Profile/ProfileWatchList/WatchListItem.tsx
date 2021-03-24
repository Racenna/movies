import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type Props = {
  title: string,
  poster_path: string | null,
  release_date: string,
  id: number,
  lastListElementRef?: (node: HTMLDivElement) => void,
  handleRemoveWatchListItem: (id: number) => void,
};

const WatchListItem = ({
  title,
  poster_path,
  release_date,
  id,
  lastListElementRef,
  handleRemoveWatchListItem,
}: Props) => {
  const poster = poster_path ? (
    <LazyLoadImage
      src={`${process.env.REACT_APP_IMG_BASE_URL}${poster_path}`}
    />
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
            title="remove from watch list"
            icon={['fas', 'trash-alt']}
            onClick={() => handleRemoveWatchListItem(id)}
          />
        </div>
        <div className="item-description-release">{date}</div>
        <div>
          <FontAwesomeIcon
            className="watch-list-button"
            title="remove from watch list"
            icon={['fas', 'bookmark']}
            onClick={() => handleRemoveWatchListItem(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default WatchListItem;
