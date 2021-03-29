import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { peopleAPI } from '../api/peopleAPI/peopleAPI';
import { Details, Cast, Crew } from '../api/peopleAPI/types';
// import { StatusCodes } from '../api/statusCodes';

const usePeopleDetails = (people_id: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState<Details | null>(null);
  const [cast, setCast] = useState<Array<Cast>>([]);
  const [crew, setCrew] = useState<Array<Crew>>([]);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    peopleAPI
      .getDetail(people_id)
      .then((res) => {
        if (!res) return;
        if (res instanceof Error) throw new Error(res.message);

        setDetail(res.detail);
        setCast(res.movieCredits.cast);
        setCrew(res.movieCredits.crew);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        setError(true);
        setErrorMessage(error.message);
        setIsLoading(false);
        toast.error(error.message);
      });
  }, [people_id]);

  return { isLoading, error, errorMessage, detail, cast, crew };
};

export default usePeopleDetails;
