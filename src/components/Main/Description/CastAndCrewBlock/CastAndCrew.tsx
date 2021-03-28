import { useState } from 'react';
import { Cast, Crew } from '../../../../api/movieAPI/types';
import CastCard from './CastCard';
import ModalCastAndCrew from './ModalCastAndCrew/ModalCastAndCrew';

type Props = {
  cast: Array<Cast>,
  crew: Array<Crew>,
};

const CastAndCrew = ({ cast, crew }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const openModal = () => {
    setIsActive(true);
  };

  const closeModal = () => {
    setIsActive(false);
  };

  return (
    <div className="description-cast">
      <span className="description-cast-title">Cast</span>
      <span className="more" onClick={openModal}>
        See all
      </span>
      <div className="cast">
        {cast.slice(0, 20).map((item) => (
          <CastCard
            key={item.credit_id}
            id={item.id}
            profile_path={item.profile_path}
            name={item.name}
          />
        ))}
      </div>
      <ModalCastAndCrew
        cast={cast}
        crew={crew}
        isActive={isActive}
        closeModal={closeModal}
      />
    </div>
  );
};

export default CastAndCrew;
