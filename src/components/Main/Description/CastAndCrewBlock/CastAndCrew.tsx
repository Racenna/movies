// cast={cast} crew={crew}
import { Cast } from '../../../../api/movieAPI/types';
import noImage from '../../../../assets/svg/no_image.svg';

type Props = {
  cast: Array<Cast>,
};

const CastAndCrew = ({ cast }: Props) => {
  return (
    <div className="description-cast">
      <span className="description-cast-title">Cast</span>
      <span className="more">See all</span>
      <div className="cast">
        {cast.map((item) => {
          const profile = item.profile_path
            ? `${process.env.REACT_APP_IMG_BASE_URL}${item.profile_path}`
            : `${noImage}`;
          return (
            <div className="cast-item" key={item.id}>
              <div>
                <img src={profile} />
              </div>
              <div className="cast-name">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CastAndCrew;
