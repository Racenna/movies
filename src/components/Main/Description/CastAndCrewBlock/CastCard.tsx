import noImage from '../../../../assets/svg/no_image.svg';

type Props = {
  profile_path: string | null,
  name: string,
};

const CastCard = ({ profile_path, name }: Props) => {
  const profile = profile_path
    ? `${process.env.REACT_APP_IMG_BASE_URL}${profile_path}`
    : `${noImage}`;
  return (
    <div className="cast-item">
      <div>
        <img src={profile} />
      </div>
      <div className="cast-name">{name}</div>
    </div>
  );
};

export default CastCard;
