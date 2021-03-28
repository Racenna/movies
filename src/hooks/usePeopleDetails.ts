import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { peopleAPI } from '../api/peopleAPI/peopleAPI';
import { Details } from '../api/peopleAPI/types';
import { StatusCodes } from '../api/statusCodes';

const usePeopleDetails = (people_id: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState<Details | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    peopleAPI
      .getDetail(people_id)
      .then((res) => {
        if (res.status_code === StatusCodes.NotFound)
          throw new Error(res.status_message);

        setDetail(res);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        setError(true);
        setIsLoading(false);
        toast.error(error.message);
      });
  }, [people_id]);

  return { isLoading, error, detail };
};

export default usePeopleDetails;
