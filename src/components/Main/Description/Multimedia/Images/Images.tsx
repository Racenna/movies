import { ImageType } from '../../../../../api/movieAPI/types';
import Image from './Image';

type Prop = {
  images: Array<ImageType>,
};

const Images = ({ images }: Prop) => {
  return (
    <div className="images">
      <div className="images-title">Images</div>
      <div className="images-content">
        {images.length !== 0 ? (
          images.map((image) => {
            const imgKey = image.file_path.slice(1, image.file_path.length - 4);
            return <Image image={image} key={imgKey} />;
          })
        ) : (
          <i>No Images</i>
        )}
      </div>
    </div>
  );
};

export default Images;
