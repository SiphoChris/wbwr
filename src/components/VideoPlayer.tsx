
function VideoPlayer({ videoUrl }: { videoUrl: string }) {
  return (
    <video autoPlay loop controls className="w-full">
        <source src={videoUrl} type="video/mp4"/>
      </video>
  )
}

export default VideoPlayer