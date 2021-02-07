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

export default Similar;
