type MovieProp = {
  poster_path: string | null,
  title: string,
};

const Movie = ({ poster_path, title }: MovieProp) => {
  const posterURL = `${process.env.REACT_APP_POSTER_BASE_URL}${poster_path}`;

  return (
    <div className="main-content-item">
      <div className="item-image">
        <img src={posterURL} />
      </div>
      <div className="item-description">
        <div className="item-description-title">{title}</div>
      </div>
    </div>
  );
};

export default Movie;
