import { ImageType } from '../../../../../api/movieAPI/types';

type Prop = {
  image: ImageType,
};

const Image = ({ image }: Prop) => {
  const imgPath = `${process.env.REACT_APP_IMG_BASE_URL}${image.file_path}`;
  const imgStyle = image.width > image.height ? 'backdrop-img' : 'poster-img';

  return (
    <div className="image">
      <img src={imgPath} className={imgStyle} />
    </div>
  );
};

export default Image;
