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
import { CustomList } from '../../../api/accountAPI/types';
import './Description.scss';
import { listsAPI } from '../../../api/listsAPI/listsAPI';

type Params = {
  movie_id: string,
};

const Description = () => {
  const [movieDesc, setMovieDesc] = useState<MovieDetail | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchList, setIsWatchList] = useState(false);
  const [rating, setRating] = useState(0);
  const [customLists, setCustomLists] = useState<Array<CustomList>>([]);
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
      moviesAPI.getAccountStates(+movie_id, session_id).then((res) => {
        setIsFavorite(res.favorite);
        setIsWatchList(res.watchlist);
        if (typeof res.rated === 'boolean') {
          setRating(0);
        } else {
          setRating(res.rated.value);
        }
      });
      accountAPI.getCreatedLists(session_id, 1).then((res) => {
        setCustomLists(res.results);
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
            moviesAPI.getAccountStates(+movie_id, session_id).then((res) => {
              setIsFavorite(res.favorite);
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
            moviesAPI.getAccountStates(+movie_id, session_id).then((res) => {
              setIsWatchList(res.watchlist);
            });
          }
        });
    }
  };

  const handleRate = (value: number) => {
    if (session_id) {
      moviesAPI.rateMovie(session_id, +movie_id, value).then((res) => {
        if (res.success) {
          //? I put a delay because i received old data in the response from the server
          setTimeout(() => {
            moviesAPI.getAccountStates(+movie_id, session_id).then((res) => {
              if (typeof res.rated === 'boolean') {
                setRating(0);
              } else {
                setRating(res.rated.value);
              }
              setIsWatchList(res.watchlist);
            });
          }, 1000);
        }
      });
    }
  };

  const handleDeleteRating = () => {
    if (session_id) {
      moviesAPI.deleteRating(session_id, +movie_id).then((res) => {
        if (res.success) {
          setTimeout(() => {
            moviesAPI.getAccountStates(+movie_id, session_id).then((res) => {
              if (typeof res.rated === 'boolean') {
                setRating(0);
              } else {
                setRating(res.rated.value);
              }
            });
          }, 1000);
        }
      });
    }
  };

  const handleAddToList = (id: number | string) => {
    if (session_id) {
      listsAPI.addMovie(id, +movie_id, session_id).then((res) => {
        if (res.success) {
          accountAPI.getCreatedLists(session_id, 1).then((res) => {
            setCustomLists(res.results);
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
        isFavorite={isFavorite}
        isWatchList={isWatchList}
        rating={rating}
        customLists={customLists}
        handleFavorite={handleFavorite}
        handleWatchList={handleWatchList}
        handleRate={handleRate}
        handleDeleteRating={handleDeleteRating}
        handleAddToList={handleAddToList}
      />
      <CastAndCrew cast={cast} crew={crew} />
      <Multimedia videos={videos} images={images} />
      <RecommendedAndSimilar recommended={recommended} similar={similar} />
    </div>
  );
};

export default Description;
