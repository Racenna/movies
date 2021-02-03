import { ImageType } from '../../../../../api/movieAPI/types';

type Prop = {
  image: ImageType,
  index: number,
  openImage: (value: number) => void,
};

const Image = ({ image, index, openImage }: Prop) => {
  const imgPath = `${process.env.REACT_APP_IMG_BASE_URL}${image.file_path}`;
  const imgStyle = image.width > image.height ? 'backdrop-img' : 'poster-img';

  return (
    <div className="image">
      <img
        src={imgPath}
        className={imgStyle}
        onClick={() => openImage(index)}
      />
    </div>
  );
};

export default Image;
