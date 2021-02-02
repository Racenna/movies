import Video from './Video';
import { VideoType } from '../../../../api/movieAPI/types';

type Prop = {
  videos: Array<VideoType>,
};

const Media = ({ videos }: Prop) => {
  return (
    <div>
      {videos.map((video) => (
        <div key={video.id}>
          <Video videoKey={video.key} />
        </div>
      ))}
    </div>
  );
};

export default Media;
