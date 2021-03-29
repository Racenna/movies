import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import noImage from '../../../../../assets/svg/no_image.svg';

type Props = {
  id: number,
  profile_path: string | null,
  name: string,
  character: string,
};

const ModalCast = ({ id, profile_path, name, character }: Props) => {
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
            <span>character</span>
            <span>{character}</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ModalCast;
