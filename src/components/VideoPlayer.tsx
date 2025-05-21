import type { videoTypes } from "../types"

function VideoPlayer({ videoUrl, controls, loop, autoPlay }: videoTypes) {
  return (
    <video key={videoUrl} autoPlay={autoPlay} loop={loop} controls={controls} muted={true} className="w-full">
        <source src={videoUrl} type="video/mp4"/>
      </video>
  )
}

export default VideoPlayer