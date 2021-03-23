import { ChangeEvent, useState } from 'react';
// import { MovieResultItem } from '../../../../api/searchAPI/types';
import useMovieSearch from '../../../../hooks/useMovieSearch';
import Result from './Result';

type Props = {
  innerRef: React.MutableRefObject<HTMLDivElement | null>,
  // results: Array<MovieResultItem>,
};

// const SearchResults = ({ innerRef, results }: Props) => {
const SearchResults = ({ innerRef }: Props) => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const { movies } = useMovieSearch(query, page);
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
    </div>
  );
};

export default SearchResults;
