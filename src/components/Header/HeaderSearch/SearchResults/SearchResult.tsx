import Result from './Result';
import { MovieResultItem } from '../../../../api/searchAPI/types';

type Props = {
  innerRef: React.MutableRefObject<HTMLDivElement | null>,
  results: Array<MovieResultItem>,
};

const SearchResults = ({ innerRef, results }: Props) => {
  return (
    <div ref={innerRef} className="search-result">
      {!results.length ? (
        <div className="no-result">no results</div>
      ) : (
        results.map((result) => (
          <Result
            key={result.id}
            id={result.id}
            title={result.title}
            original_title={result.original_title}
            rating={result.vote_average}
          />
        ))
      )}
    </div>
  );
};

export default SearchResults;
