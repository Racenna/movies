import { useState } from 'react';
import { VideoType } from '../../../../../api/movieAPI/types';
import Video from './Video';
import ModalVideo from './ModalVideo';

type Prop = {
  videos: Array<VideoType>,
};

const Videos = ({ videos }: Prop) => {
  const [isActive, setIsActive] = useState(false);
  const [videoKey, setVideoKey] = useState('');

  const openVideo = (key: string) => {
    setIsActive(true);
    setVideoKey(key);
  };

  const closeVideo = () => {
    setIsActive(false);
    setVideoKey('');
  };

  return (
    <div className="videos">
      <div className="videos-title">Videos</div>
      <div className="videos-content">
        {videos.map((video) => (
          <div className="video" key={video.id}>
            <Video
              videoKey={video.key}
              name={video.name}
              openVideo={openVideo}
            />
          </div>
        ))}
      </div>
      <ModalVideo
        isActive={isActive}
        videoKey={videoKey}
        closeVideo={closeVideo}
      />
    </div>
  );
};

export default Videos;
