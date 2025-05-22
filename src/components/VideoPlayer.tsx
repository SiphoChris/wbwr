import { useEffect, useRef } from "react";
import type { videoTypes } from "../types";
import { useVideo } from "../contexts/HeroVideoContext";

function VideoPlayer({
  videoUrl,
  controls,
  loop,
  autoPlay,
  muted,
}: videoTypes) {
  const { setVideoLoaded } = useVideo();
  const videoRef = useRef<HTMLVideoElement>(null);

  // reset loading state when video URL changes
  useEffect(() => {
    setVideoLoaded(false);
  }, [videoUrl, setVideoLoaded]);

  const handleCanPlayThrough = () => {
    setVideoLoaded(true);
  };

  const handleLoadStart = () => {
    setVideoLoaded(false);
  };

  return (
    <video
      ref={videoRef}
      key={videoUrl}
      autoPlay={autoPlay}
      loop={loop}
      controls={controls}
      muted={muted}
      className="w-full"
      onCanPlayThrough={handleCanPlayThrough}
      onLoadStart={handleLoadStart}
      preload="metadata"
    >
      <source src={videoUrl} type="video/mp4" />
    </video>
  );
}

export default VideoPlayer;