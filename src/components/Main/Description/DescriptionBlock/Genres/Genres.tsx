import { GenreType } from '../../../../../api/movieAPI/types';
import Genre from './Genre';

type GenresProp = {
  genres: Array<GenreType>,
};

const Genres = ({ genres }: GenresProp) => {
  return (
    <div className="genres">
      {genres.map((genre) => (
        <Genre key={genre.id} name={genre.name} />
      ))}
    </div>
  );
};

export default Genres;
