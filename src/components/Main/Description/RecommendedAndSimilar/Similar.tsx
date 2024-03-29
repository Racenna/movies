import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import { RecommendationsAndSimilarResult } from '../../../../api/movieAPI/types';

type Props = {
  similar: Array<RecommendationsAndSimilarResult>,
};

const Similar = ({ similar }: Props) => {
  const emptyStyle = similar.length === 0 ? 'empty' : '';

  return (
    <div className={`similar ${emptyStyle}`}>
      <div className="similar-title">Similar</div>
      <div className="similar-content">
        {similar.map((item) => {
          const poster = item.poster_path ? (
            <LazyLoadImage
              src={`${process.env.REACT_APP_IMG_BASE_URL}${item.poster_path}`}
            />
          ) : (
            <div className="empty-poster">No Image</div>
          );
          return (
            <div key={item.id}>
              <div className="item">
                <NavLink to={`/movie/description/${item.id}`}>{poster}</NavLink>
                <NavLink to={`/movie/description/${item.id}`}>
                  <div className="item-title">{item.title}</div>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Similar;
