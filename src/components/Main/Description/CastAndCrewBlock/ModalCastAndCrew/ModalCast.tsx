import noImage from '../../../../../assets/svg/no_image.svg';

type Props = {
  profile_path: string | null,
  name: string,
  character: string,
};

const ModalCast = ({ profile_path, name, character }: Props) => {
  const profile = profile_path
    ? `${process.env.REACT_APP_IMG_BASE_URL}${profile_path}`
    : `${noImage}`;
  return (
    <div className="item">
      <div className="item-poster">
        <img src={profile} />
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
  );
};

export default ModalCast;
