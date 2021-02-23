import { GenreType } from '../../../../api/movieAPI/types';
import Genres from './Genres/Genres';
import Poster from './Poster';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

type Props = {
  poster_path: string | null,
  title: string,
  overview: string | null,
  original_title: string,
  genres: Array<GenreType>,
  release_date: string,
  runtime: number | null,
  status: string,
  vote_average: number,
  vote_count: number,
};

const DescriptionBlock = ({
  poster_path,
  title,
  overview,
  original_title,
  genres,
  release_date,
  runtime,
  status,
  vote_average,
  vote_count,
}: Props) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date(release_date);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  const [like, setLike] = useState(false);

  const clickLikeHandler = () => {
    setLike(!like);
  };

  return (
    <div className="description-block">
      <div className="desc-header">
        <div className="title">{title}</div>
        <FontAwesomeIcon
          className={`like-button ${like ? 'active' : ''}`}
          icon={['fas', 'heart']}
          onClick={clickLikeHandler}
        />
      </div>
      <div className="detail">
        <Poster poster_path={poster_path} title={title} />
        <div className="detail-text">
          <div className="info">
            <div className="info-item">
              <span>Original title:</span> {original_title}
            </div>
            <div className="info-item">
              <span>Release:</span> {`${month} ${day} ${year}`}
            </div>
            <div className="info-item">
              <span>Runtime:</span> {runtime} min
            </div>
            <div className="info-item">
              <span>Status:</span> {status}
            </div>
            <div className="info-item">
              <span>Vote average:</span> {vote_average}/10 ({vote_count})
            </div>
            <Genres genres={genres} />
          </div>
          <div className="overview">{overview}</div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBlock;
