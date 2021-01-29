import Item from './Item';
import { TrendingResults } from '../../../../api/types';

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
        />
      ))}
    </div>
  );
};

export default Movies;
