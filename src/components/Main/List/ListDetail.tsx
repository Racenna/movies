import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { listsAPI } from '../../../api/listsAPI/listsAPI';
import { ListDetailType } from '../../../api/listsAPI/types';
import { StatusCodes } from '../../../api/statusCodes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
      {error && <div className="not-found">list not found</div>}
      {detail && (
        <div className="detail">
          <div className="block">
            <div>
              <span className="detail-title">{detail.name}</span>
              <span className="detail-created-by">
                Created by {detail.created_by}
              </span>
            </div>
            <div>
              <span title="likes count" className="detail-favorite-count">
                {detail.favorite_count}{' '}
                <FontAwesomeIcon icon={['fas', 'heart']} />
              </span>
              <span title="Movie/TV count" className="detail-items-count">
                {detail.item_count} <FontAwesomeIcon icon={['fas', 'video']} />
              </span>
            </div>
            <div className="detail-description">
              <span className="detail-description-title">About this list</span>{' '}
              <br />
              {detail.description || 'No description entered'}
            </div>
          </div>
          <div className="detail-items">
            {detail.items.map((item) => {
              const poster = item.poster_path ? (
                <LazyLoadImage
                  src={`${process.env.REACT_APP_IMG_BASE_URL}${item.poster_path}`}
                />
              ) : (
                <div className="empty-poster">No Image</div>
              );

              return (
                <div key={item.id} className="item">
                  <NavLink
                    className="item-image"
                    to={`/movie/description/${item.id}`}
                  >
                    {poster}
                  </NavLink>
                  <div className="item-title">
                    <NavLink to={`/movie/description/${item.id}`}>
                      {item.title}
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListDetail;
