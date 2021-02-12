import Item from './Item';
import { TrendingResults } from '../../../../api/trendingAPI/types';

type Props = {
  items: Array<TrendingResults>,
};

const Items = ({ items }: Props) => {
  return (
    <div className="main-content">
      {items.map((value) => (
        <Item
          key={value.id}
          poster_path={value.poster_path}
          title={value.title}
          release_date={value.release_date}
          overview={value.overview}
          id={value.id}
        />
      ))}
    </div>
  );
};

export default Items;
