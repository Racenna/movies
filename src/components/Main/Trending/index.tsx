import { useEffect, useState } from 'react';
import { trendingAPI } from '../../../api/trendingAPI/trendingAPI';
import { TrendingResults } from '../../../api/trendingAPI/types';
import Items from './Items/Items';
import '../Main.scss';

const Trending = () => {
  const [items, setItems] = useState<Array<TrendingResults>>([]);

  useEffect(() => {
    trendingAPI.getTrendingMoviesDay().then((res) => {
      setItems(res.results);
    });
  }, []);

  return (
    <div className="main">
      <div className="main-title">Trending</div>
      <Items items={items} />
    </div>
  );
};

export default Trending;