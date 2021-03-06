import { CustomList } from '../../../../api/accountAPI/types';
import { GenreType } from '../../../../api/movieAPI/types';
import Genres from './Genres/Genres';
import Poster from './Poster/Poster';

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
  session_id: string | null,
  isFavorite: boolean,
  isWatchList: boolean,
  rating: number,
  customLists: Array<CustomList>,
  handleFavorite: (isFavorite: boolean) => void,
  handleWatchList: (isWatchList: boolean) => void,
  handleRate: (value: number) => void,
  handleDeleteRating: () => void,
  handleAddToList: (id: number | string, name: string) => void,
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
  session_id,
  isFavorite,
  isWatchList,
  rating,
  customLists,
  handleFavorite,
  handleWatchList,
  handleRate,
  handleDeleteRating,
  handleAddToList,
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

  return (
    <div className="description-block">
      <div className="desc-header">
        <div className="title">{title}</div>
      </div>
      <div className="detail">
        <Poster
          poster_path={poster_path}
          title={title}
          session_id={session_id}
          isFavorite={isFavorite}
          isWatchList={isWatchList}
          rating={rating}
          customLists={customLists}
          release_date={release_date}
          handleFavorite={handleFavorite}
          handleWatchList={handleWatchList}
          handleRate={handleRate}
          handleDeleteRating={handleDeleteRating}
          handleAddToList={handleAddToList}
        />
        <div className="detail-text">
          <div className="info">
            <div className="info-item">
              <span>Original title:</span> {original_title}
            </div>
            <div className="info-item">
              <span>Release:</span>{' '}
              {release_date ? `${month} ${day} ${year}` : 'No release date'}
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
