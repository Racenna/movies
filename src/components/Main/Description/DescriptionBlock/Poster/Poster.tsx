import { CustomList } from '../../../../../api/accountAPI/types';
import PosterButtons from './PosterButtons/PosterButtons';

type Props = {
  poster_path: string | null,
  title: string,
  session_id: string | null,
  isFavorite: boolean,
  isWatchList: boolean,
  rating: number,
  customLists: Array<CustomList>,
  release_date: string,
  handleFavorite: (isFavorite: boolean) => void,
  handleWatchList: (isWatchList: boolean) => void,
  handleRate: (value: number) => void,
  handleDeleteRating: () => void,
  handleAddToList: (id: number | string) => void,
};

const Poster = ({
  poster_path,
  title,
  session_id,
  isFavorite,
  isWatchList,
  rating,
  customLists,
  release_date,
  handleFavorite,
  handleWatchList,
  handleRate,
  handleDeleteRating,
  handleAddToList,
}: Props) => {
  const poster = poster_path ? (
    <img
      src={`${process.env.REACT_APP_IMG_BASE_URL}${poster_path}`}
      alt={title}
    />
  ) : (
    <div className="empty-poster">No Image</div>
  );

  return (
    <div className="detail-poster">
      {poster}
      {session_id && (
        <PosterButtons
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
      )}
    </div>
  );
};

export default Poster;
