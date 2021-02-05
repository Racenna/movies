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
          const posterPath = `${process.env.REACT_APP_IMG_BASE_URL}${item.poster_path}`;
          return (
            <div key={item.id}>
              <div className="item">
                <NavLink to={`/movie/description/${item.id}`}>
                  <img src={posterPath} />
                </NavLink>
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
