import { Genre } from '../../../../api/movieAPI/types';
import Genres from './Genres';

type Prop = {
  poster_path: string | null,
  title: string,
  overview: string | null,
  original_title: string,
  genres: Array<Genre>,
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
}: Prop) => {
  const poster = `${process.env.REACT_APP_IMG_BASE_URL}${poster_path}`;
  const date = release_date.slice(0, 4);

  return (
    <div className="description-block">
      <div className="description-block-poster">
        <img src={poster} alt="bg-image" />
      </div>
      <div className="description-block-text">
        <div className="title">{title}</div>
        <div className="info">
          <div className="info-item">
            <span>Original title:</span> {original_title}
          </div>
          <div className="info-item">
            <span>Release:</span> {date}
          </div>
          <div className="info-item">
            <span>Runtime:</span> {runtime} min
          </div>
          <div className="info-item">
            <span>Status:</span> {status}
          </div>
          <div className="info-item">
            <span>Vote average:</span> {vote_average} ({vote_count})
          </div>
          <Genres genres={genres} />
        </div>
        <div className="overview">{overview}</div>
        {/* <div className="cast"></div> */}
      </div>
    </div>
  );
};

export default DescriptionBlock;
