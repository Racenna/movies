import { useEffect, useState } from 'react';
import { trendingAPI } from '../../../api/trendingAPI/trendingAPI';
import { TrendingResults } from '../../../api/trendingAPI/types';
import Items from './Items/Items';
import '../Main.scss';
import Preloader from '../../../common/Preloader';

const Trending = () => {
  const [items, setItems] = useState<Array<TrendingResults>>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    trendingAPI.getTrendingMoviesDay().then((res) => {
      setItems(res.results);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Preloader />;

  return (
    <div className="main">
      <div className="main-title">Trending</div>
      <Items items={items} />
    </div>
  );
};

export default Trending;
