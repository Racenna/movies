import { ChangeEvent, useEffect, useRef, useState } from 'react';
import SearchResults from './SearchResults/SearchResult';
import useMovieSearch from '../../../hooks/useMovieSearch';

const HeaderSearch = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const { movies } = useMovieSearch(query, page);

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
        resultDivBox.current.style.display = 'flex';
      } else if (
        e.target instanceof HTMLDivElement &&
        resultDivBox.current.contains(e.target)
      ) {
        resultDivBox.current.style.display = 'flex';
      } else {
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

  return (
    <div className="header-search">
      <input
        ref={searchInput}
        type="text"
        placeholder="search..."
        onChange={handleSearch}
      />
      <SearchResults innerRef={resultDivBox} results={movies} />
    </div>
  );
};

export default HeaderSearch;
