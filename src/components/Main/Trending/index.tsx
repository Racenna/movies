import { useEffect, useState } from 'react';
import { trendingAPI } from '../../../api/api';
import { TrendingResults } from '../../../api/types';
import Movies from './Movies';
import '../Main.scss';

const Trending = () => {
  const [movies, setMovies] = useState<Array<TrendingResults>>([]);

  useEffect(() => {
    trendingAPI.getTrendingMoviesDay().then((res) => {
      setMovies(res.results);
    });
  }, []);

  return (
    <div className="main">
      <div className="main-title">Trending</div>
      <Movies movies={movies} />
    </div>
  );
};

export default Trending;
