import Item from './Item';
import { TrendingResults } from '../../../../api/trendingAPI/types';

type MoviesProp = {
  items: Array<TrendingResults>,
};

const Movies = ({ items }: MoviesProp) => {
  return (
    <div className="main-content">
      {items.map((value) => (
        <Item
          key={value.id}
          poster_path={value.poster_path}
          title={value.title}
          id={value.id}
        />
      ))}
    </div>
  );
};

export default Movies;
