import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesAPI } from '../../../api/movieAPI/movieAPI';
import {
  MovieDetail,
  Cast,
  VideoType,
  ImageType,
  RecommendationsAndSimilarResult,
} from '../../../api/movieAPI/types';
import Preloader from '../../../common/Preloader';
import DescriptionBlock from './DescriptionBlock/DescriptionBlock';
import CastAndCrew from './CastAndCrewBlock/CastAndCrew';
import Multimedia from './Multimedia/Multimedia';
import RecommendedAndSimilar from './RecommendedAndSimilar/RecommendedAndSimilar';
import './Description.scss';

type Params = {
  movie_id: string,
};

const Description = () => {
  const [movieDesc, setMovieDesc] = useState<MovieDetail | null>(null);
  const [cast, setCast] = useState<Array<Cast>>([]);
  const [videos, setVideos] = useState<Array<VideoType>>([]);
  const [images, setImages] = useState<Array<ImageType>>([]);
  const [recommended, setRecommended] = useState<
    Array<RecommendationsAndSimilarResult>
  >([]);
  const [similar, setSimilar] = useState<
    Array<RecommendationsAndSimilarResult>
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const { movie_id } = useParams<Params>();

  useEffect(() => {
    setIsLoading(true);
    moviesAPI.getAllMovieDetail(+movie_id).then((res) => {
      setMovieDesc(res.detail);
      setCast(res.castAndCrew.cast);
      setVideos(res.videos.results);
      setImages(res.images);
      setRecommended(res.recommendations.slice(0, 6));
      setSimilar(res.similar.slice(0, 6));
      setIsLoading(false);
    });
  }, [movie_id]);

  if (isLoading || !movieDesc) return <Preloader />;

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
      <Multimedia videos={videos} images={images} />
      <RecommendedAndSimilar recommended={recommended} similar={similar} />
    </div>
  );
};

export default Description;
