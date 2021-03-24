import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type Props = {
  poster_path: string | null,
  title: string,
  release_date: string,
  id: number,
};

const Item = ({ poster_path, title, release_date, id }: Props) => {
  const poster = poster_path ? (
    <LazyLoadImage
      src={`${process.env.REACT_APP_IMG_BASE_URL}${poster_path}`}
    />
  ) : (
    <div className="empty-poster">No Image</div>
  );

  const date = release_date ? release_date.slice(0, 4) : '';
  return (
    <div className="main-content-item">
      <NavLink to={`/movie/description/${id}`} className="item-image">
        {poster}
      </NavLink>
      <div className="item-description">
        <div className="item-description-title">
          <NavLink to={`/movie/description/${id}`}>{title}</NavLink>
        </div>
        <div className="item-description-release">{date}</div>
      </div>
    </div>
  );
};

export default Item;
