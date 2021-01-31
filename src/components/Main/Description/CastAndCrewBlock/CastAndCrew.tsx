// cast={cast} crew={crew}
import { Cast } from '../../../../api/movieAPI/types';

type Prop = {
  cast: Array<Cast>,
};

const CastAndCrew = ({ cast }: Prop) => {
  const shortCastList = cast.slice(0, 5);
  return (
    <div className="description-cast">
      <div className="description-cast-title">Cast</div>
      <div className="cast">
        {shortCastList.map((item) => {
          const profile = `${process.env.REACT_APP_IMG_BASE_URL}${item.profile_path}`;
          return (
            <div className="cast-item" key={item.id}>
              <div>
                <img src={profile} />
              </div>
              <div>{item.name}</div>
            </div>
          );
        })}
        <div className="more">more</div>
      </div>
    </div>
  );
};

export default CastAndCrew;
