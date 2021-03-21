import { useEffect, useState } from 'react';
import { searchAPI } from '../api/searchAPI/searchAPI';
import { MovieResultItem } from '../api/searchAPI/types';
import { toast } from 'react-toastify';

const useMovieSearch = (query: string, page: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<Array<MovieResultItem>>([]);

  useEffect(() => {
    setMovies([]);
  }, [query]);

  useEffect(() => {
    setIsLoading(true);

    searchAPI
      .searchMovies(query, page)
      .then((res) => {
        if (res) {
          setMovies(res.results);
          setIsLoading(false);
        }
      })
      .catch((err: Error) => {
        toast.error(err.message);
      });
  }, [query, page]);

  return { isLoading, movies };
};

export default useMovieSearch;
