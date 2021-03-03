import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountAPI } from '../../../api/accountAPI/accountAPI';
import { AccountResponse, Movie } from '../../../api/accountAPI/types';
import { SessionContext } from '../../../contexts/SessionContext';
import ProfileDetail from './ProfileDetail/ProfileDetail';
import ProfileNavigation from './ProfileNavigation/ProfileNavigation';
import ProfileFavoriteList from './ProfileFavoriteList/ProfileFavoriteList';
import './Profile.scss';
import ProfileWatchList from './ProfileWatchList/ProfileWatchList';

type Params = {
  typeList: 'watch-list' | 'rated' | 'lists' | undefined,
};

const Profile = () => {
  const { session_id } = useContext(SessionContext);
  const [profile, setProfile] = useState<AccountResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [favoriteList, setFavoriteList] = useState<Array<Movie>>([]);
  const [watchList, setWatchList] = useState<Array<Movie>>([]);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const { typeList } = useParams<Params>();

  const observer = useRef<IntersectionObserver | null>(null);
  const lastListElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && page < totalPage) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, totalPage]
  );

  const handleRemoveFavoriteItem = (id: number) => {
    if (session_id) {
      accountAPI
        .markAsFavorite(
          {
            favorite: false,
            media_id: id,
            media_type: 'movie',
          },
          session_id
        )
        .then((res) => {
          if (res.success) {
            setFavoriteList((prevList) => {
              return prevList.filter((item) => {
                return item.id !== id;
              });
            });
          }
        });
    }
  };

  const handleRemoveWatchListItem = (id: number) => {
    if (session_id) {
      accountAPI
        .MarkToWatchList(
          {
            watchlist: false,
            media_id: id,
            media_type: 'movie',
          },
          session_id
        )
        .then((res) => {
          if (res.success) {
            setWatchList((prevList) => {
              return prevList.filter((item) => {
                return item.id !== id;
              });
            });
          }
        });
    }
  };

  useEffect(() => {
    if (session_id) {
      accountAPI.getAccount(session_id).then((res) => {
        setProfile(res);
      });
    }
  }, []);

  useEffect(() => {
    setPage(1);
    setTotalPage(1);
    setFavoriteList([]);
    setWatchList([]);
  }, [typeList]);

  useEffect(() => {
    setIsLoading(true);
    if (session_id) {
      switch (typeList) {
        case undefined: {
          accountAPI.getFavoriteList(session_id, 'movies', page).then((res) => {
            setFavoriteList((prevList) => {
              return [...prevList, ...res.results];
            });
            setTotalPage(res.total_pages);
            setIsLoading(false);
          });
          break;
        }
        case 'watch-list': {
          accountAPI.getWatchList(session_id, 'movies', page).then((res) => {
            setWatchList((prevList) => {
              return [...prevList, ...res.results];
            });
            setTotalPage(res.total_pages);
            setIsLoading(false);
          });
          break;
        }
        case 'rated': {
          console.log(3);
          setFavoriteList([]);
          break;
        }
        case 'lists': {
          console.log(4);
          setFavoriteList([]);
          break;
        }
      }
    }
  }, [typeList, page]);

  return (
    <div className="profile">
      {profile && <ProfileDetail profile={profile} />}
      <ProfileNavigation />
      {typeList === undefined && (
        <ProfileFavoriteList
          favoriteList={favoriteList}
          isLoading={isLoading}
          lastListElementRef={lastListElementRef}
          handleRemoveFavoriteItem={handleRemoveFavoriteItem}
        />
      )}
      {typeList === 'watch-list' && (
        <ProfileWatchList
          watchList={watchList}
          isLoading={isLoading}
          lastListElementRef={lastListElementRef}
          handleRemoveWatchListItem={handleRemoveWatchListItem}
        />
      )}
      {typeList === 'rated' && (
        <div className="profile-list-items">
          <div>rated 1</div>
          <div>rated 2</div>
          <div>rated 3</div>
        </div>
      )}
      {typeList === 'lists' && (
        <div className="profile-list-items">
          <div>lists 1</div>
          <div>lists 2</div>
          <div>lists 3</div>
        </div>
      )}
    </div>
  );
};

export default Profile;
