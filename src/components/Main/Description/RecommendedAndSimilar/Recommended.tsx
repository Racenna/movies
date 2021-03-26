import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import { RecommendationsAndSimilarResult } from '../../../../api/movieAPI/types';

type Props = {
  recommended: Array<RecommendationsAndSimilarResult>,
};

const Recommended = ({ recommended }: Props) => {
  const emptyStyle = recommended.length === 0 ? 'empty' : '';
  return (
    <div className={`recommended ${emptyStyle}`}>
      <div className="recommended-title">Recommended</div>
      <div className="recommended-content">
        {recommended.map((item) => {
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

export default Recommended;
