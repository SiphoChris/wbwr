import { gallery } from "../../constants/data";

function GallerySection() {
  return (
    <section>
      <div className="grid grid-cols-2">
        <div>
            <img src={gallery[0].imageUrl} alt="image" />
        </div>
        <div className="grid grid-cols-2 grid-rows-2">
          {gallery.slice(1).map((image, index) => (
            <img src={image.imageUrl} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
