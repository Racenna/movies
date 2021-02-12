type Props = {
  poster_path: string | null,
  title: string,
};

const Poster = ({ poster_path, title }: Props) => {
  const poster = poster_path ? (
    <img
      src={`${process.env.REACT_APP_IMG_BASE_URL}${poster_path}`}
      alt={title}
    />
  ) : (
    <div className="empty-poster">No Image</div>
  );

  return <div className="detail-poster">{poster}</div>;
};

export default Poster;
