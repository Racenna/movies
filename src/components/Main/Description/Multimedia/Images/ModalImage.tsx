import { ImageType } from '../../../../../api/movieAPI/types';

type Props = {
  isActive: boolean,
  image: ImageType,
  closeImage: () => void,
  previousImage: () => void,
  nextImage: () => void,
};

const ModalImage = ({
  isActive,
  image,
  closeImage,
  previousImage,
  nextImage,
}: Props) => {
  const style = isActive ? 'active' : 'inactive';
  const imgPath = `${process.env.REACT_APP_IMG_BASE_URL}${image.file_path}`;
  const imgStyle = image.width > image.height ? 'backdrop-img' : 'poster-img';
  return (
    <div className={`modal-image ${style}`}>
      <div className="close-button" onClick={closeImage}>
        <div className="line-1"></div>
        <div className="line-2"></div>
      </div>
      <div className="centered-image">
        <div className="arrow-button" onClick={previousImage}>
          &#10094;
        </div>
        <div className="image-container">
          <img className={imgStyle} src={imgPath} />
        </div>
        <div className="arrow-button" onClick={nextImage}>
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default ModalImage;
