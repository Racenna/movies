import { useState } from 'react';
import { ImageType } from '../../../../../api/movieAPI/types';
import Image from './Image';
import ModalImage from './ModalImage';

type Props = {
  images: Array<ImageType>,
};

const Images = ({ images }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const openImage = (index: number) => {
    setIsActive(true);
    setImageIndex(index);
  };

  const closeImage = () => {
    setIsActive(false);
    setImageIndex(0);
  };

  const nextImage = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  const previousImage = () => {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  const emptyStyle = images.length === 0 ? 'empty' : '';

  return (
    <div className={`images ${emptyStyle}`}>
      <div className="images-title">Images</div>
      <div className="images-content">
        {images.map((image, index) => {
          const imgKey = image.file_path.slice(1, image.file_path.length - 4);
          return (
            <Image
              image={image}
              key={imgKey}
              index={index}
              openImage={openImage}
            />
          );
        })}
      </div>
      <ModalImage
        isActive={isActive}
        image={images[imageIndex]}
        closeImage={closeImage}
        previousImage={previousImage}
        nextImage={nextImage}
      />
    </div>
  );
};

export default Images;
