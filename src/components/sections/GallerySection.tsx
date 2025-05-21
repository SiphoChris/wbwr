import VideoPlayer from "../VideoPlayer";

import { gallery } from "../../constants/data";

function GallerySection() {
  return (
    <section>
      <div className="mb-6">
        <h3 className="text-[24px] font-plak-bold">
          What’s happening on Instagram
        </h3>
        <p className="text-[14px] font-plak-regular">
          Don’t miss out on the latest news and updates from Under Armour.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <VideoPlayer videoUrl={gallery[0].videoUrl!} controls={true} loop={true} autoPlay={false} />
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {gallery.slice(1).map((image, index) => (
            <div key={index}>
              <img
                src={image.imageUrl}
                className="object-cover object-right"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
