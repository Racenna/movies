import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { moviesAPI } from '../../../api/movieAPI/movieAPI';
import {
  MovieDetail,
  Cast,
  Crew,
  VideoType,
  ImageType,
  RecommendationsAndSimilarResult,
} from '../../../api/movieAPI/types';
import Preloader from '../../../common/Preloader';
import DescriptionBlock from './DescriptionBlock/DescriptionBlock';
import CastAndCrew from './CastAndCrewBlock/CastAndCrew';
import Multimedia from './Multimedia/Multimedia';
import RecommendedAndSimilar from './RecommendedAndSimilar/RecommendedAndSimilar';
import { accountAPI } from '../../../api/accountAPI/accountAPI';
import { SessionContext } from '../../../contexts/SessionContext';
import './Description.scss';

type Params = {
  movie_id: string,
};

const Description = () => {
  const [movieDesc, setMovieDesc] = useState<MovieDetail | null>(null);
  const [favoriteIds, setFavoriteIds] = useState<Array<number>>([]);
  const [watchListIds, setWatchListIds] = useState<Array<number>>([]);
  const [cast, setCast] = useState<Array<Cast>>([]);
  const [crew, setCrew] = useState<Array<Crew>>([]);
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

  const { session_id } = useContext(SessionContext);

  useEffect(() => {
    setIsLoading(true);
    moviesAPI.getAllMovieDetail(+movie_id).then((res) => {
      setMovieDesc(res.detail);
      setCast(res.castAndCrew.cast);
      setCrew(res.castAndCrew.crew);
      setVideos(res.videos.results);
      setImages(res.images);
      setRecommended(res.recommendations.slice(0, 6));
      setSimilar(res.similar.slice(0, 6));
      setIsLoading(false);
    });
  }, [movie_id]);

  useEffect(() => {
    if (session_id) {
      accountAPI.getFavoriteIds(session_id).then((res) => {
        setFavoriteIds(res);
      });
      accountAPI.getWatchListIds(session_id).then((res) => {
        setWatchListIds(res);
      });
    }
  }, [session_id]);

  const handleFavorite = (isFavorite: boolean) => {
    if (session_id) {
      accountAPI
        .markAsFavorite(
          {
            media_type: 'movie',
            media_id: +movie_id,
            favorite: isFavorite,
          },
          session_id
        )
        .then((res) => {
          if (res.success) {
            accountAPI.getFavoriteIds(session_id).then((res) => {
              setFavoriteIds(res);
            });
          }
        });
    }
  };

  const handleWatchList = (isWatchList: boolean) => {
    if (session_id) {
      accountAPI
        .MarkToWatchList(
          {
            media_type: 'movie',
            media_id: +movie_id,
            watchlist: isWatchList,
          },
          session_id
        )
        .then((res) => {
          if (res.success) {
            accountAPI.getWatchListIds(session_id).then((res) => {
              setWatchListIds(res);
            });
          }
        });
    }
  };

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
        session_id={session_id}
        isFavorite={favoriteIds.includes(+movie_id)}
        isWatchList={watchListIds.includes(+movie_id)}
        handleFavorite={handleFavorite}
        handleWatchList={handleWatchList}
      />
      <CastAndCrew cast={cast} crew={crew} />
      <Multimedia videos={videos} images={images} />
      <RecommendedAndSimilar recommended={recommended} similar={similar} />
    </div>
  );
};

export default Description;
