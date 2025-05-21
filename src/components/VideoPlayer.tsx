import type { videoTypes } from "../types"

function VideoPlayer({ videoUrl, controls, loop, autoPlay }: videoTypes) {
  return (
    <video autoPlay={autoPlay} loop={loop} controls={controls} className="w-full">
        <source src={videoUrl} type="video/mp4"/>
      </video>
  )
}

export default VideoPlayer