import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesAPI } from '../../../api/movieAPI/movieAPI';
import { MovieDetail } from '../../../api/movieAPI/types';
import Preloader from '../../../common/Preloader';

type Params = {
  movie_id: string,
};

const Description = () => {
  const [movieDesc, setMovieDesc] = useState<MovieDetail | null>(null);
  const { movie_id } = useParams<Params>();

  useEffect(() => {
    moviesAPI.getMovieDetail(+movie_id).then((res) => {
      setMovieDesc(res);
    });
  }, []);

  if (!movieDesc) return <Preloader />;

  return <div className="main">{movieDesc?.title}</div>;
};

export default Description;
