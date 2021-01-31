import { Genre } from '../../../../api/movieAPI/types';

type GenresProp = {
  genres: Array<Genre>,
};

const Genres = ({ genres }: GenresProp) => {
  return (
    <div className="genres">
      <span>Genres:</span>
      {genres.map((genre) => {
        return (
          <div key={genre.id} className="genres-item">
            {genre.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
