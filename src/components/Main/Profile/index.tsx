import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountAPI } from '../../../api/accountAPI/accountAPI';
import { moviesAPI } from '../../../api/movieAPI/movieAPI';
import {
  AccountResponse,
  CustomList,
  Movie,
} from '../../../api/accountAPI/types';
import { SessionContext } from '../../../contexts/SessionContext';
import ProfileDetail from './ProfileDetail/ProfileDetail';
import ProfileNavigation from './ProfileNavigation/ProfileNavigation';
import ProfileFavoriteList from './ProfileFavoriteList/ProfileFavoriteList';
import ProfileWatchList from './ProfileWatchList/ProfileWatchList';
import ProfileRatedList from './ProfileRatedList/ProfileRatedList';
import ProfileCustomLists from './ProfileCustomLists/ProfileCustomLists';
import './Profile.scss';
import { StatusCodes } from '../../../api/statusCodes';
import { toast } from 'react-toastify';
import { listsAPI } from '../../../api/listsAPI/listsAPI';

type Params = {
  typeList: 'watch-list' | 'rated' | 'lists' | 'favorite',
};

const Profile = () => {
  const { session_id } = useContext(SessionContext);
  const [profile, setProfile] = useState<AccountResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [favoriteList, setFavoriteList] = useState<Array<Movie>>([]);
  const [watchList, setWatchList] = useState<Array<Movie>>([]);
  const [ratedList, setRatedList] = useState<Array<Movie>>([]);
  const [customLists, setCustomLists] = useState<Array<CustomList>>([]);

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

  const handleRemoveFavoriteItem = (id: number, name: string) => {
    if (!session_id) return;
    if (
      !confirm(`Do you really want to delete the '${name}' from favorite list`)
    )
      return;

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

          if (res.status_code === StatusCodes.Delete) {
            toast.dark('Movie removed from favorites');
          }
        } else {
          throw new Error(res.status_message);
        }
      })
      .catch((error: Error) => {
        toast.error(error.message);
      });
  };

  const handleRemoveWatchListItem = (id: number, name: string) => {
    if (!session_id) return;
    if (!confirm(`Do you really want to delete the '${name}' from watch list`))
      return;

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

          if (res.status_code === StatusCodes.Delete) {
            toast.dark(`Movie removed from watchlist`);
          }
        } else {
          throw new Error(res.status_message);
        }
      })
      .catch((error: Error) => {
        toast.error(error.message);
      });
  };

  const handleRateItem = (value: number, id: number) => {
    if (!session_id) return;

    moviesAPI
      .rateMovie(session_id, id, value)
      .then((res) => {
        if (res.success) {
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

            if (res.status_code === StatusCodes.Success) {
              toast.dark('You have rated the movie');
            } else if (res.status_code === StatusCodes.Update) {
              toast.dark('You have updated the rating for a movie');
            }
          }, 1000);
        } else {
          throw new Error(res.status_message);
        }
      })
      .catch((error: Error) => {
        toast.error(error.message);
      });
  };

  const handleDeleteRatingItem = (id: number, name: string) => {
    if (!session_id) return;
    if (!confirm(`Do you really want to delete the '${name}' from rating list`))
      return;

    moviesAPI
      .deleteRating(session_id, id)
      .then((res) => {
        if (res.success) {
          setTimeout(() => {
            moviesAPI.getAccountStates(id, session_id).then((res) => {
              if (typeof res.rated === 'boolean') {
                setRatedList((prevList) => {
                  return prevList.filter((item) => item.id !== id);
                });
              }
            });

            if (res.status_code === StatusCodes.Delete) {
              toast.dark('You have removed the rating from a movie');
            }
          }, 1000);
        } else {
          throw new Error(res.status_message);
        }
      })
      .catch((error: Error) => {
        toast.error(error.message);
      });
  };

  const handleClearList = (list_id: number, name: string) => {
    if (!session_id) return;

    const isConfirm = confirm(`Do you really want to clear the ${name} list`);

    if (!isConfirm) return;

    listsAPI
      .clearList(list_id.toString(), session_id, isConfirm)
      .then((res) => {
        if (res.success) {
          setCustomLists((prevList) => {
            return prevList.filter((list) => {
              if (list.id === +list_id) {
                list.item_count = 0;
              }

              return true;
            });
          });

          if (res.status_code === StatusCodes.Update) {
            toast.dark(`The ${name} list was cleared`);
          }
        } else {
          throw new Error(res.status_message);
        }
      })
      .catch((error: Error) => {
        toast.error(error.message);
      });
  };

  const handleDeleteList = (list_id: number, name: string) => {
    if (!session_id) return;
    if (!confirm(`Do you really want to delete the ${name} list`)) return;

    listsAPI
      .deleteList(list_id.toString(), session_id)
      .then((res) => {
        /**
         * ! I really don't know why server is returning an error
         * ! But this works
         */
        if (res.status_code === StatusCodes.ServerError) {
          setCustomLists((prevList) => {
            return prevList.filter((list) => list.id !== +list_id);
          });
          toast.dark(`The ${name} list was deleted`);
        } else {
          throw new Error(res.status_message);
        }
      })
      .catch((error: Error) => {
        toast.error(error.message);
      });
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
    setCustomLists([]);
  }, [typeList]);

  useEffect(() => {
    setIsLoading(true);
    if (session_id) {
      switch (typeList) {
        case 'favorite': {
          accountAPI.getFavoriteList(session_id, 'movies', page).then((res) => {
            setFavoriteList((prevList) => {
              return [...prevList, ...res.results];
            });
            setTotalPage(res.total_pages);
            setIsLoading(false);
            document.title = 'Profile | Favorite';
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
            document.title = 'Profile | Watch list';
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
            document.title = 'Profile | Rated';
          });
          break;
        }
        case 'lists': {
          accountAPI.getCreatedLists(session_id, page).then((res) => {
            setCustomLists((prevList) => {
              return [...prevList, ...res.results];
            });
            setTotalPage(res.total_pages);
            setIsLoading(false);
            document.title = 'Profile | Lists';
          });
          break;
        }
      }
    }
  }, [typeList, page]);

  return (
    <div className="profile">
      {profile && <ProfileDetail profile={profile} />}
      <ProfileNavigation />
      {typeList === 'favorite' && (
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
        <ProfileCustomLists
          customLists={customLists}
          isLoading={isLoading}
          lastListElementRef={lastListElementRef}
          handleClearList={handleClearList}
          handleDeleteList={handleDeleteList}
        />
      )}
    </div>
  );
};

export default Profile;
