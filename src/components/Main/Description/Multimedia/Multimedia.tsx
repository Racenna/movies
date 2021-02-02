import Videos from './Videos/Videos';
import { VideoType } from '../../../../api/movieAPI/types';

type Prop = {
  videos: Array<VideoType>,
};

const Media = ({ videos }: Prop) => {
  return (
    <div className="description-multimedia">
      <Videos videos={videos} />
    </div>
  );
};

export default Media;
