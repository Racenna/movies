type Props = {
  isActive: boolean,
  videoKey: string,
  closeVideo: () => void,
};

const ModalVideo = ({ isActive, videoKey, closeVideo }: Props) => {
  const style = isActive ? 'active' : 'inactive';
  return (
    <div className={`modal-video ${style}`}>
      <div className="close-button" onClick={closeVideo}>
        <div className="line-1"></div>
        <div className="line-2"></div>
      </div>
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${videoKey}`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ModalVideo;
