import { useEffect } from "react";

import Button from "../ui/Button";
import VideoPlayer from "../VideoPlayer";
import { useWindowSize } from "usehooks-ts";
import { useVideo } from "../../contexts/HeroVideoContext";

function HeroSection() {
  const { width } = useWindowSize();
  const { setVideoLoaded } = useVideo();

  useEffect(() => {
    setVideoLoaded(false);
  }, [width, setVideoLoaded]);

  return (
    <section className="mb-[60px]">
      <div className="relative">
        {width < 768 ? (
          <VideoPlayer
            videoUrl="/videos/mobile/UA_Theme_1_MB.mp4"
            controls={false}
            loop={true}
            autoPlay={true}
            muted={true}
          />
        ) : (
          <VideoPlayer
            videoUrl="/videos/desktop/UA_Theme_1_DT.mp4"
            controls={false}
            loop={true}
            autoPlay={true}
            muted={true}
          />
        )}

        {/* Desktop */}
        <div className="hidden md:block absolute top-1/2 lg:left-1/2 md:translate-x-3/12 lg:translate-x-6/12 -translate-y-1/2 space-y-8">
          <h1 className="md:text-5xl md:leading-10 lg:leading-18 lg:text-[86px] font-plak-condensed">
            CHECK <br /> OUT OUR <br /> LATEST <br /> GEAR
          </h1>
          <p className="md:text-[11px] lg:text-[12px] font-plak-regular">
            Advanced tech, superior comfort and all <br /> performance is what
            our latest UA gear is all <br /> about. Built to go further, push
            hard and break <br /> your boundaries.
          </p>
          <Button>Shop UA New Arrivals</Button>
        </div>

        {/* Mobile */}
        <div className="space-y-6 md:hidden px-4 pt-8">
          <h1 className="text-5xl leading-12 font-plak-condensed">
            CHECK OUT OUR <br /> LATEST GEAR
          </h1>
          <p className="md:text-[11px] lg:text-[12px] font-plak-regular">
            Advanced tech, superior comfort and all performance is <br /> what
            our latest UA gear is all about. Built to go further,
            <br /> push hard and break your boundaries.
          </p>
          <Button classNames="w-full">Shop UA New Arrivals</Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
