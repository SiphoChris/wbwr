
function VideoPlayer({ videoUrl, controls }: { videoUrl: string, controls: boolean }) {
  return (
    <video autoPlay loop controls={controls} className="w-full">
        <source src={videoUrl} type="video/mp4"/>
      </video>
  )
}

export default VideoPlayer