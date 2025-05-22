import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import Button from "../ui/Button";
import VideoPlayer from "../VideoPlayer";
import { useWindowSize } from "usehooks-ts";
import { useVideo } from "../../contexts/HeroVideoContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.35,
      when: "beforeChildren",
      staggerChildren: 0.24,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function HeroSection() {
  const { width } = useWindowSize();
  const { setVideoLoaded } = useVideo();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    setVideoLoaded(false);
  }, [width, setVideoLoaded]);

  return (
    <section className="mb-[40px] md:mb-[60px]">
      <div className="relative">
        {width < 768 ? (
          <VideoPlayer
            videoUrl="/videos/mobile/UA_Theme_1_MB.mp4"
            controls={false}
            loop
            autoPlay
            muted
          />
        ) : (
          <VideoPlayer
            videoUrl="/videos/desktop/UA_Theme_1_DT.mp4"
            controls={false}
            loop
            autoPlay
            muted
          />
        )}

        {/* Desktop */}
        <motion.div
          ref={ref}
          className="hidden md:block absolute top-1/2 left-1/2 md:translate-x-3/12 lg:translate-x-6/12 -translate-y-1/2 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1
            variants={childVariants}
            className="md:text-5xl md:leading-10 lg:leading-18 lg:text-[86px] font-plak-condensed"
          >
            CHECK <br /> OUT OUR <br /> LATEST <br /> GEAR
          </motion.h1>
          <motion.p
            variants={childVariants}
            className="md:text-[11px] lg:text-[12px] font-plak-regular"
          >
            Advanced tech, superior comfort and all <br /> performance is what
            our latest UA gear is all <br /> about. Built to go further, push
            hard and break <br /> your boundaries.
          </motion.p>
          <motion.div variants={childVariants}>
            <Button>Shop UA New Arrivals</Button>
          </motion.div>
        </motion.div>

        {/* Mobile Content */}
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
