import "./background.styles.css";
import backgroundVideo from "../../assets/background.mp4";

const BckgroundVideo = () => {
  return (
    <div className="background-video-container">
      <video
        className="background-video"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default BckgroundVideo;
