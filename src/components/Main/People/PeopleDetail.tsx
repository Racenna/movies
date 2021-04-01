import { useEffect, useState } from 'react';
import noImage from '../../../assets/svg/no_image.svg';

type Props = {
  name: string,
  profile_path: string | null,
  department: string,
  also_known_as: Array<string>,
  birthday: string | null,
  deathday: string | null,
  place_of_birth: string | null,
  biography: string,
};

const PeopleDetail = ({
  name,
  profile_path,
  department,
  also_known_as,
  birthday,
  deathday,
  biography,
  place_of_birth,
}: Props) => {
  const [knownAs, setKnownAs] = useState(false);
  const [moreBiography, setMoreBiography] = useState(false);

  useEffect(() => {
    document.title = name;
  }, []);

  return (
    <div className="people-detail">
      <div className="people-detail-name">{name}</div>
      <div className="main-info-block">
        {profile_path ? (
          <img
            className="poster"
            src={`${process.env.REACT_APP_IMG_BASE_URL}${profile_path}`}
          />
        ) : (
          <img className="poster" src={`${noImage}`} />
        )}
        <div className="info">
          <div className="info-item">
            <span className="info-item-title">Department: </span>
            <span>{department}</span>
          </div>
          {!!also_known_as.length && (
            <div className="info-item">
              <span className="info-item-title">Also known as: </span>
              <span
                className={`show_all ${!knownAs ? 'active' : 'inactive'}`}
                onClick={() => setKnownAs(true)}
              >
                . . .
              </span>
              <span className={`${knownAs ? 'active' : 'inactive'}`}>
                <br />
                {also_known_as.map((item) => (
                  <span key={item}>
                    {item}
                    <br />
                  </span>
                ))}
                <span className="hide_all" onClick={() => setKnownAs(false)}>
                  hide
                </span>
              </span>
            </div>
          )}
          {birthday && (
            <div className="info-item">
              <span className="info-item-title">Birthday: </span>
              <span>{birthday}</span>
            </div>
          )}
          {deathday && (
            <div className="info-item">
              <span className="info-item-title">Deathday: </span>
              <span>{deathday}</span>
            </div>
          )}
          {place_of_birth && (
            <div className="info-item">
              <span className="info-item-title">Place of birth: </span>
              <span>{place_of_birth}</span>
            </div>
          )}
          {!!biography.length && (
            <div className="info-item">
              <span className="info-item-title">Biography: </span>
              <span>
                <span className={!moreBiography ? 'active' : 'inactive'}>
                  {biography.slice(0, 250)}{' '}
                </span>
                {biography.length > 250 ? (
                  <span
                    className={`show_all ${
                      !moreBiography ? 'active' : 'inactive'
                    }`}
                    onClick={() => setMoreBiography(true)}
                  >
                    . . .
                  </span>
                ) : (
                  <span></span>
                )}
                <span className={moreBiography ? 'active' : 'inactive'}>
                  {biography}
                  <br />
                  <span
                    className="hide_all"
                    onClick={() => setMoreBiography(false)}
                  >
                    hide
                  </span>
                </span>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PeopleDetail;
