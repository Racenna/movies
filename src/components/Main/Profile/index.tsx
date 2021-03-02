import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountAPI } from '../../../api/accountAPI/accountAPI';
import { AccountResponse, FavoriteMovie } from '../../../api/accountAPI/types';
import { SessionContext } from '../../../contexts/SessionContext';
import ProfileDetail from './ProfileDetail/ProfileDetail';
import ProfileNavigation from './ProfileNavigation/ProfileNavigation';
import './Profile.scss';
import ProfileFavoriteList from './ProfileFavoriteList/ProfileFavoriteList';

type Params = {
  typeList: 'watch-list' | 'rated' | 'lists' | undefined,
};

const Profile = () => {
  const { session_id } = useContext(SessionContext);
  const [profile, setProfile] = useState<AccountResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [favoriteList, setFavoriteList] = useState<Array<FavoriteMovie>>([]);

  const { typeList } = useParams<Params>();

  useEffect(() => {
    if (session_id) {
      accountAPI.getAccount(session_id).then((res) => {
        setProfile(res);
      });
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    switch (typeList) {
      case undefined: {
        accountAPI
          .getFavoriteList(session_id || '', 'movies', 1)
          .then((res) => {
            setFavoriteList(res.results);
            setIsLoading(false);
          });
        break;
      }
      case 'watch-list': {
        console.log(2);
        setFavoriteList([]);
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
  }, [typeList]);

  return (
    <div className="profile">
      {profile && <ProfileDetail profile={profile} />}
      <ProfileNavigation />
      {typeList === undefined && (
        <ProfileFavoriteList
          favoriteList={favoriteList}
          isLoading={isLoading}
        />
      )}
      {typeList === 'watch-list' && (
        <div className="profile-list-items">
          <div>watch-list 1</div>
          <div>watch-list 2</div>
          <div>watch-list 3</div>
        </div>
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
