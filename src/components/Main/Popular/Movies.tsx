import Movie from './Movie';
import { PopularMoviesResult } from '../../../api/api';
import '../Main.scss';

type MoviesProp = {
  movies: Array<PopularMoviesResult>,
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
