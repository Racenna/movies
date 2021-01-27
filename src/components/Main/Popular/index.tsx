import { useEffect, useState } from 'react';
import { movieAPI, PopularMoviesResult } from '../../../api/api';
import Movies from './Movies';
import '../Main.scss';

const Popular = () => {
  const [movies, setMovies] = useState<Array<PopularMoviesResult>>([]);

  useEffect(() => {
    movieAPI.getPopularMovies().then((res) => {
      setMovies(res.results);
    });
  }, []);

  return (
    <div className="main">
      <div className="main-title">Popular</div>
      <Movies movies={movies} />;
    </div>
  );
};

export default Popular;
