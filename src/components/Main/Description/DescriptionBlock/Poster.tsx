type Props = {
  poster_path: string | null,
  title: string,
};

const Poster = ({ poster_path, title }: Props) => {
  const poster = `${process.env.REACT_APP_IMG_BASE_URL}${poster_path}`;

  return (
    <div className="detail-poster">
      <img src={poster} alt={title} />
    </div>
  );
};

export default Poster;
