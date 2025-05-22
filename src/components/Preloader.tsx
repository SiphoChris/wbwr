function Preloader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        {/* <p className="text-white text-xl font-plak-regular">Loading...</p> */}
      </div>
    </div>
  );
}

export default Preloader;