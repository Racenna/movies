import { useState } from 'react';
import { VideoType } from '../../../../../api/movieAPI/types';
import Video from './Video';
import ModalVideo from './ModalVideo';

type Props = {
  videos: Array<VideoType>,
};

const Videos = ({ videos }: Props) => {
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

  const emptyStyle = videos.length === 0 ? 'empty' : '';

  return (
    <div className={`videos ${emptyStyle}`}>
      <div className="videos-title">Videos</div>
      <div className="videos-content">
        {videos.map((video) => (
          <Video
            key={video.id}
            videoKey={video.key}
            name={video.name}
            openVideo={openVideo}
          />
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
