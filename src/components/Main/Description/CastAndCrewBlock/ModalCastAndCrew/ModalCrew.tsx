import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import noImage from '../../../../../assets/svg/no_image.svg';

type Props = {
  id: number,
  profile_path: string | null,
  name: string,
  department: string,
  job: string,
};

const ModalCrew = ({ id, profile_path, name, department, job }: Props) => {
  const profile = profile_path
    ? `${process.env.REACT_APP_IMG_BASE_URL}${profile_path}`
    : `${noImage}`;
  return (
    <NavLink to={`/people/${id}`}>
      <div className="item">
        <div className="item-poster">
          <LazyLoadImage src={profile} />
        </div>
        <div className="item-detail">
          <div>
            <span>name</span>
            <span>{name}</span>
          </div>
          <div>
            <span>department</span>
            <span>{department}</span>
          </div>
          <div>
            <span>job</span>
            <span>{job}</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ModalCrew;
