import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { trendingAPI } from '../../../api/trendingAPI/trendingAPI';
import { TrendingResults } from '../../../api/trendingAPI/types';
import Pagination from '../../../common/Pagination';
import Preloader from '../../../common/Preloader';
import Items from './Items/Items';
import './Trending.scss';

const Trending = () => {
  const [items, setItems] = useState<Array<TrendingResults>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    document.title = 'Trending';
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get('page');
    if (page) {
      setIsLoading(true);
      setCurrentPage(+page);
      trendingAPI.getTrendingMoviesDay(+page).then((res) => {
        setTotalPages(res.total_pages);
        setItems(res.results);
        setIsLoading(false);
      });
    } else {
      setCurrentPage(1);
      trendingAPI.getTrendingMoviesDay(1).then((res) => {
        setTotalPages(res.total_pages);
        setItems(res.results);
        setIsLoading(false);
      });
    }
  }, [location]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return <Preloader />;

  return (
    <div className="trending">
      <div className="trending-title">Trending</div>
      <Items items={items} />
      <Pagination
        page={currentPage}
        totalPages={totalPages}
        pageRange={2}
        onPageChange={onPageChange}
        path="/trending"
      />
    </div>
  );
};

export default Trending;
