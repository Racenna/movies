type Prop = {
  videoKey: string,
  name: string,
  openVideo: (value: string) => void,
};

const Video = ({ name, videoKey, openVideo }: Prop) => {
  return (
    <div className="video-container">
      <img src={`https://img.youtube.com/vi/${videoKey}/0.jpg`} />
      <div
        className="fade"
        onClick={() => {
          openVideo(videoKey);
        }}
      >
        <div className="play-button"></div>
      </div>
      <span title={name} className="preview-title">
        {name}
      </span>
    </div>
  );
};

export default Video;
