import VideoPlayer from "../VideoPlayer";

import { gallery } from "../../constants/data";

function GallerySection() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-4">
        <VideoPlayer videoUrl={gallery[0].videoUrl!} controls={true} />
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {gallery.slice(1).map((image, index) => (
            <div>
              <img src={image.imageUrl} key={index} className="object-cover object-right" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
