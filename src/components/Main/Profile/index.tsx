import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountAPI } from '../../../api/accountAPI/accountAPI';
import { moviesAPI } from '../../../api/movieAPI/movieAPI';
import { AccountResponse, Movie } from '../../../api/accountAPI/types';
import { SessionContext } from '../../../contexts/SessionContext';
import ProfileDetail from './ProfileDetail/ProfileDetail';
import ProfileNavigation from './ProfileNavigation/ProfileNavigation';
import ProfileFavoriteList from './ProfileFavoriteList/ProfileFavoriteList';
import ProfileWatchList from './ProfileWatchList/ProfileWatchList';
import ProfileRatedList from './ProfileRatedList/ProfileRatedList';
import './Profile.scss';

type Params = {
  typeList: 'watch-list' | 'rated' | 'lists' | undefined,
};

const Profile = () => {
  const { session_id } = useContext(SessionContext);
  const [profile, setProfile] = useState<AccountResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [favoriteList, setFavoriteList] = useState<Array<Movie>>([]);
  const [watchList, setWatchList] = useState<Array<Movie>>([]);
  const [ratedList, setRatedList] = useState<Array<Movie>>([]);

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
              return prevList.filter((item) => item.id !== id);
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
              return prevList.filter((item) => item.id !== id);
            });
          }
        });
    }
  };

  const handleRateItem = (value: number, id: number) => {
    if (session_id) {
      moviesAPI.rateMovie(session_id, id, value).then((res) => {
        if (res.success) {
          //? I put a delay because i received old data in the response from the server
          setTimeout(() => {
            moviesAPI.getAccountStates(id, session_id).then((res) => {
              if (typeof res.rated === 'boolean') {
                setRatedList((prevList) => {
                  return prevList.filter((item) => item.id !== id);
                });
              } else {
                setRatedList((prevList) => {
                  return prevList.map((item) => {
                    if (item.id === id && item.rating) {
                      item.rating = value;
                    }
                    return item;
                  });
                });
              }
            });
          }, 1000);
        }
      });
    }
  };

  const handleDeleteRatingItem = (id: number) => {
    if (session_id) {
      moviesAPI.deleteRating(session_id, id).then((res) => {
        if (res.success) {
          setTimeout(() => {
            moviesAPI.getAccountStates(id, session_id).then((res) => {
              if (typeof res.rated === 'boolean') {
                setRatedList((prevList) => {
                  return prevList.filter((item) => item.id !== id);
                });
              }
            });
          }, 1000);
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
    setRatedList([]);
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
          accountAPI.getRatedList(session_id, 'movies', page).then((res) => {
            setRatedList((prevList) => {
              return [...prevList, ...res.results];
            });
            setTotalPage(res.total_pages);
            setIsLoading(false);
          });
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
        <ProfileRatedList
          ratedList={ratedList}
          isLoading={isLoading}
          lastListElementRef={lastListElementRef}
          handleRateItem={handleRateItem}
          handleDeleteRatingItem={handleDeleteRatingItem}
        />
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
