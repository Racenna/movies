// cast={cast} crew={crew}
import { Cast } from '../../../../api/movieAPI/types';
import CastCard from './CastCard';

type Props = {
  cast: Array<Cast>,
};

const CastAndCrew = ({ cast }: Props) => {
  return (
    <div className="description-cast">
      <span className="description-cast-title">Cast</span>
      <span className="more">See all</span>
      <div className="cast">
        {cast.map((item) => (
          <CastCard
            key={item.id}
            profile_path={item.profile_path}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default CastAndCrew;
