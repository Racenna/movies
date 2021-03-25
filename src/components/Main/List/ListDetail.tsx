import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { listsAPI } from '../../../api/listsAPI/listsAPI';
import { ListDetailType } from '../../../api/listsAPI/types';
import { StatusCodes } from '../../../api/statusCodes';
import Preloader from '../../../common/Preloader';
import './List.scss';

type Params = {
  listId: string,
};

const ListDetail = () => {
  const { listId } = useParams<Params>();
  const [detail, setDetail] = useState<ListDetailType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    listsAPI
      .getDetails(listId)
      .then((res) => {
        if (res.status_code === StatusCodes.NotFound)
          throw new Error(res.status_message);

        setDetail(res);
        setIsLoading(false);
      })
      .catch((err: Error) => {
        setError(true);
        setIsLoading(false);
        toast.error(err.message);
      });
  }, [listId]);

  if (isLoading) return <Preloader />;

  return (
    <div className="list-description">
      {error && <div>list not found</div>}
      {detail && (
        <div>
          <div>{detail.name}</div>
          <div>A list created by {detail.created_by}</div>
          <div>
            About this list {detail.description || 'No description entered'}
          </div>
          <div>Favorite count: {detail.favorite_count}</div>
          <div>Movies/TV count: {detail.item_count}</div>
        </div>
      )}
    </div>
  );
};

export default ListDetail;
