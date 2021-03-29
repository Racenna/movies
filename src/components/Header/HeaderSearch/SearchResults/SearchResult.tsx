import { ChangeEvent, useState } from 'react';
import Preloader from '../../../../common/Preloader';
import useMovieSearch from '../../../../hooks/useMovieSearch';
import Result from './Result';

type Props = {
  innerRef: React.MutableRefObject<HTMLDivElement | null>,
};

const SearchResults = ({ innerRef }: Props) => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const { movies, isLoading } = useMovieSearch(query, page);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setQuery(e.target.value);
      setPage(1);
    }
  };

  return (
    <div ref={innerRef} className="search-box">
      <input
        autoFocus
        type="text"
        placeholder="search..."
        onChange={handleChange}
      />
      {isLoading && query.length > 0 ? (
        <Preloader />
      ) : (
        <div className="search-result">
          {!movies.length ? (
            <div className="no-result">no results</div>
          ) : (
            movies.map((movie) => (
              <Result
                key={movie.id}
                id={movie.id}
                title={movie.title}
                original_title={movie.original_title}
                rating={movie.vote_average}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
