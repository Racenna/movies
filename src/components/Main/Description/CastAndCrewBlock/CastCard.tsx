import noImage from '../../../../assets/svg/no_image.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';

type Props = {
  id: number,
  profile_path: string | null,
  name: string,
};

const CastCard = ({ id, profile_path, name }: Props) => {
  const profile = profile_path
    ? `${process.env.REACT_APP_IMG_BASE_URL}${profile_path}`
    : `${noImage}`;
  return (
    <NavLink className="cast-item" to={`/people/${id}`}>
      <div>
        <div>
          <LazyLoadImage src={profile} />
        </div>
        <div className="cast-name">{name}</div>
      </div>
    </NavLink>
  );
};

export default CastCard;
