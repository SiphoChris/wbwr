import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "./ui/Button";

type formProps = {
  className?: string;
};

const container = {
  animate: {
    transition: {
      staggerChildren: 0.24,
    },
  },
};

const child = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

function Form({ className }: formProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.form
      ref={ref}
      className={className}
      variants={container}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="space-y-6 px-4 form-text">
        <motion.p
          variants={child}
          className="md:text-white font-plak-bold text-[14px] md:text-[16px] -mb-0.5"
        >
          Project Rock
        </motion.p>
        <motion.h2
          variants={child}
          className="md:text-white font-plak-condensed text-[40px] md:text-[64px] leading-10 lg:leading-14"
        >
          Every Side <br />
          Of Strong
        </motion.h2>
        <motion.p
          variants={child}
          className="md:text-white font-plak-regular text-[14px] lg:w-[46ch]"
        >
          The Underground collection is inspired by the idea of a Project Rock
          fight club. A place where we push each other harder to make each other
          stronger. A drop dedicated to you and your crew. The neon colourways
          are a reflection of the energy we bring to every rep, every set and
          every challenge.
        </motion.p>
        <motion.div variants={child}>
          <Button classNames="max-md:w-full md:bg-transparent border-1 md:border-white hover:bg-white hover:text-black font-plak-regular md:text-[16px]">
            Shop Project Rock
          </Button>
        </motion.div>
      </motion.div>
    </motion.form>
  );
}

export default Form;
