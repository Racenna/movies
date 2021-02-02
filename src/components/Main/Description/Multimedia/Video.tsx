type Prop = {
  videoKey: string,
};

const Video = ({ videoKey }: Prop) => {
  return (
    <iframe
      height="300"
      width="450"
      src={`https://www.youtube.com/embed/${videoKey}`}
      allowFullScreen
      title="video"
    ></iframe>
  );
};

export default Video;
