import PosterButtons from './PosterButtons/PosterButtons';

type Props = {
  poster_path: string | null,
  title: string,
  session_id: string | null,
  isFavorite: boolean,
  isWatchList: boolean,
  handleFavorite: (isFavorite: boolean) => void,
  handleWatchList: (isWatchList: boolean) => void,
};

const Poster = ({
  poster_path,
  title,
  session_id,
  isFavorite,
  isWatchList,
  handleFavorite,
  handleWatchList,
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
          handleFavorite={handleFavorite}
          handleWatchList={handleWatchList}
        />
      )}
    </div>
  );
};

export default Poster;
