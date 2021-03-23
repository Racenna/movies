import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchResults from './SearchResults/SearchResult';

const HeaderSearch = () => {
  const searchButton = useRef<HTMLButtonElement | null>(null);
  const resultDivBox = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: MouseEvent) => {
    if (searchButton.current && resultDivBox.current) {
      if (
        e.target === searchButton.current ||
        (e.target instanceof SVGElement &&
          searchButton.current.contains(e.target))
      ) {
        resultDivBox.current.style.display = 'flex';

        if (resultDivBox.current.children[0] instanceof HTMLInputElement) {
          resultDivBox.current.children[0].focus();
        }
      } else if (
        (e.target instanceof HTMLDivElement &&
          resultDivBox.current.contains(e.target)) ||
        (e.target instanceof HTMLInputElement &&
          resultDivBox.current.contains(e.target)) ||
        (e.target instanceof SVGElement &&
          resultDivBox.current.contains(e.target))
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
  }, [resultDivBox, searchButton]);

  return (
    <div className="header-search">
      <button className="header-search-btn" ref={searchButton}>
        <FontAwesomeIcon icon={['fas', 'search']} /> Search
      </button>
      <SearchResults innerRef={resultDivBox} />
    </div>
  );
};

export default HeaderSearch;
