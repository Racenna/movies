import { Cast, Crew } from '../../../../../api/movieAPI/types';
import ModalCast from './ModalCast';
import ModalCrew from './ModalCrew';

type Props = {
  isActive: boolean,
  cast: Array<Cast>,
  crew: Array<Crew>,
  closeModal: () => void,
};

const ModalCastAndCrew = ({ isActive, cast, crew, closeModal }: Props) => {
  const style = isActive ? 'active' : 'inactive';
  return (
    <div className={`modal-window ${style}`}>
      <div className="close-button" onClick={closeModal}>
        <div className="line-1"></div>
        <div className="line-2"></div>
      </div>
      <div className="content-wrapper">
        <div>
          <div className="title">Cast</div>
          <div className="list">
            {cast.map((item) => (
              <ModalCast
                key={item.credit_id}
                id={item.id}
                profile_path={item.profile_path}
                name={item.name}
                character={item.character}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="title">Crew</div>
          <div className="list">
            {crew.map((item) => (
              <ModalCrew
                key={item.credit_id}
                id={item.id}
                profile_path={item.profile_path}
                name={item.name}
                department={item.department}
                job={item.job}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCastAndCrew;
