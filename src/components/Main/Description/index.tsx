import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesAPI } from '../../../api/movieAPI/movieAPI';
import { MovieDetail, Cast } from '../../../api/movieAPI/types';
import Preloader from '../../../common/Preloader';
import DescriptionBlock from './DescriptionBlock/DescriptionBlock';
import CastAndCrew from './CastAndCrewBlock/CastAndCrew';
import './Description.scss';

type Params = {
  movie_id: string,
};

const Description = () => {
  const [movieDesc, setMovieDesc] = useState<MovieDetail | null>(null);
  const [cast, setCast] = useState<Array<Cast>>([]);
  const { movie_id } = useParams<Params>();

  useEffect(() => {
    moviesAPI.getMovieDetail(+movie_id).then((res) => {
      setMovieDesc(res);
    });
    moviesAPI.getCastMovie(+movie_id).then((res) => {
      setCast(
        res.cast.filter((item) => {
          return item.profile_path !== null ? true : false;
        })
      );
    });
  }, []);

  if (!movieDesc) return <Preloader />;

  return (
    <div className="description">
      <DescriptionBlock
        poster_path={movieDesc.poster_path}
        title={movieDesc.title}
        overview={movieDesc.overview}
        original_title={movieDesc.original_title}
        genres={movieDesc.genres}
        release_date={movieDesc.release_date}
        runtime={movieDesc.runtime}
        status={movieDesc.status}
        vote_average={movieDesc.vote_average}
        vote_count={movieDesc.vote_count}
      />
      <CastAndCrew cast={cast} />
    </div>
  );
};

export default Description;
