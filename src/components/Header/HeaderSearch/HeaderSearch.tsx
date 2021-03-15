import { ChangeEvent, useEffect, useRef, useState } from 'react';
import useMovieSearch from '../../../hooks/useMovieSearch';

const HeaderSearch = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const searchInput = useRef<HTMLInputElement | null>(null);
  const resultDivBox = useRef<HTMLDivElement | null>(null);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setQuery(e.target.value);
      setPage(1);
    }
  };

  const handleClick = (e: MouseEvent) => {
    if (searchInput.current && resultDivBox.current) {
      if (e.target === searchInput.current) {
        console.log('You click on search input');
        resultDivBox.current.style.display = 'block';
      } else if (
        e.target instanceof HTMLDivElement &&
        !resultDivBox.current.contains(e.target)
      ) {
        resultDivBox.current.style.display = 'none';
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [resultDivBox, searchInput]);

  const { movies, error, isLoading } = useMovieSearch(query, page);

  console.warn(movies, error, isLoading);
  return (
    <div className="header-search">
      <input
        ref={searchInput}
        type="text"
        placeholder="search..."
        onChange={handleSearch}
      />
      <div ref={resultDivBox} className="search-result">
        {movies.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSearch;
