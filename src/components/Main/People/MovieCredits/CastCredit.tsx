import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';

type Props = {
  id: number,
  poster_path: string | null,
  title: string,
};

const CastCredit = ({ title, poster_path, id }: Props) => {
  const poster = poster_path ? (
    <LazyLoadImage
      src={`${process.env.REACT_APP_IMG_BASE_URL}${poster_path}`}
    />
  ) : (
    <div className="empty-poster">No Image</div>
  );

  return (
    <div className="item">
      <NavLink to={`/movie/description/${id}`}>{poster}</NavLink>
      <NavLink className="item-title" to={`/movie/description/${id}`}>
        {title}
      </NavLink>
    </div>
  );
};

export default CastCredit;
