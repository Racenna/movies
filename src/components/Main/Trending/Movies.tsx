import Movie from './Movie';
import { TrendingResults } from '../../../api/types';

type MoviesProp = {
  movies: Array<TrendingResults>,
};

const Movies = ({ movies }: MoviesProp) => {
  return (
    <div className="main-content">
      {movies.map((value) => (
        <Movie
          key={value.id}
          poster_path={value.poster_path}
          title={value.title}
        />
      ))}
    </div>
  );
};

export default Movies;
