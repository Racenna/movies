import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesAPI } from '../../../api/movieAPI/movieAPI';
import { MovieDetail } from '../../../api/movieAPI/types';
import Preloader from '../../../common/Preloader';
import './Description.scss';

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

  const imgPath = process.env.REACT_APP_POSTER_BASE_URL;

  return (
    <div className="description">
      <div className="description-block">
        <div className="description-block-poster">
          <img src={`${imgPath}${movieDesc.poster_path}`} alt="bg-image" />
        </div>
        <div className="description-block-text"></div>
      </div>
    </div>
  );
};

export default Description;
