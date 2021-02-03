import { VideoType, ImageType } from '../../../../api/movieAPI/types';
import Videos from './Videos/Videos';
import Images from './Images/Images';

type Prop = {
  videos: Array<VideoType>,
  images: Array<ImageType>,
};

const Media = ({ videos, images }: Prop) => {
  return (
    <div className="description-multimedia">
      <Videos videos={videos} />
      <Images images={images} />
    </div>
  );
};

export default Media;
