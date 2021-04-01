import { TrendingResults } from '../../../../api/trendingAPI/types';
import Item from './Item';

type Props = {
  items: Array<TrendingResults>,
};

const Items = ({ items }: Props) => {
  return (
    <div className="trending-content">
      {items.map((value) => (
        <Item
          key={value.id}
          poster_path={value.poster_path}
          title={value.title}
          release_date={value.release_date}
          id={value.id}
        />
      ))}
    </div>
  );
};

export default Items;
