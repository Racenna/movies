import { NavLink } from 'react-router-dom';

type MovieProp = {
  poster_path: string | null,
  title: string,
  id: number,
};

const Movie = ({ poster_path, title, id }: MovieProp) => {
  const poster = poster_path ? (
    <img src={`${process.env.REACT_APP_IMG_BASE_URL}${poster_path}`} />
  ) : (
    <div className="empty-poster">No Image</div>
  );
  return (
    <div className="main-content-item">
      <NavLink to={`/movie/description/${id}`} className="item-image">
        {poster}
      </NavLink>
      <div className="item-description">
        <div className="item-description-title">
          <NavLink to={`/movie/description/${id}`}>{title}</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Movie;
