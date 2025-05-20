import Button from "../ui/Button";
import VideoPlayer from "../VideoPlayer";

function HeroSection() {
  return (
    <section className="mb-[60px]">
      <div className="relative">
        <VideoPlayer videoUrl="/public/videos/desktop/UA_Theme_1_DT.mp4" />
        <div className="absolute top-1/2 left-1/2 transform translate-x-5/12 -translate-y-1/2 space-y-9">
          <h1 className="text-[86px] leading-17 font-plak-condensed">
            Check <br /> out our <br /> latest <br /> gear
          </h1>
          <p className="text-[12px] font-plak-regular">
            Advanced tech, superior comfort and all <br /> performance is what our
            latest UA gear is all <br /> about. Built to go further, push hard and
            break <br /> your boundaries.
          </p>
          <Button>Shop UA New Arrivals</Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
