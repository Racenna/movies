import { useParams } from 'react-router';
import Preloader from '../../../common/Preloader';
import usePeopleDetails from '../../../hooks/usePeopleDetails';
import noImage from '../../../assets/svg/no_image.svg';
import './People.scss';
import { useState } from 'react';

type Params = {
  people_id: string,
};

const People = () => {
  const [isActive, setIsActive] = useState(false);

  const { people_id } = useParams<Params>();

  const { isLoading, detail, error } = usePeopleDetails(+people_id);

  if (isLoading) return <Preloader />;

  return (
    <div className="people">
      {error && <div className="not-found">People not found</div>}
      {detail && (
        <div className="people-detail">
          <div className="people-detail-name">{detail.name}</div>
          <div className="main-info-block">
            {detail.profile_path ? (
              <img
                className="poster"
                src={`${process.env.REACT_APP_IMG_BASE_URL}${detail.profile_path}`}
              />
            ) : (
              <img className="poster" src={`${noImage}`} />
            )}
            <div className="info">
              <div className="info-item">
                <span className="info-item-title">Department: </span>
                <span>{detail.known_for_department}</span>
              </div>
              <div className="info-item">
                <span className="info-item-title">Also known as: </span>
                <span
                  className={`show_all ${!isActive ? 'active' : 'inactive'}`}
                  onClick={() => setIsActive(true)}
                >
                  . . .
                </span>
                <span className={`${isActive ? 'active' : 'inactive'}`}>
                  <br />
                  {detail.also_known_as.map((item) => (
                    <span key={item}>
                      {item}
                      <br />
                    </span>
                  ))}
                  <span className="hide_all" onClick={() => setIsActive(false)}>
                    hide
                  </span>
                </span>
              </div>
              {detail.birthday && (
                <div className="info-item">
                  <span className="info-item-title">Birthday: </span>
                  <span>{detail.birthday}</span>
                </div>
              )}
              {detail.deathday && (
                <div className="info-item">
                  <span className="info-item-title">Deathday: </span>
                  <span>{detail.deathday}</span>
                </div>
              )}
              {detail.place_of_birth && (
                <div className="info-item">
                  <span className="info-item-title">Place of birth: </span>
                  <span>{detail.place_of_birth}</span>
                </div>
              )}
              <div className="info-item">
                <span className="info-item-title">Biography: </span>
                <span>{detail.biography}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default People;
