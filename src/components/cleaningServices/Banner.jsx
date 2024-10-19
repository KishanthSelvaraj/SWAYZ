import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from "/cleaningImages/CleaningLogo.jpg"; // Update this path to your logo
import cleaningVideo from "/cleaningImages/bannervideo.mp4"; // Update this to your video file

const Banner = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        videoUrl={cleaningVideo} // Use the new video file
        subheading="Swayz Cleaning Services"
      ></TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ videoUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[100vh]">
        <StickyVideo videoUrl={videoUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyVideo = ({ videoUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        scale,
        position: "relative",
        overflow: "hidden",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
      }}
      ref={targetRef}
      className="sticky z-0 rounded-3xl"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
      />
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <img src={logo} alt="Company Logo" className="mb-4 h-24 w-auto" />
      <p className="mb-2 text-customGolden text-center font-bold uppercase text-2xl md:mb-4 md:text-4xl">
        {subheading}
      </p>
      <p className="text-center text-base md:px-10 px-2 lg:px-40 font-normal md:text-xl">
        Swayz Cleaning Services is a division of the Swayz Group, committed to
        providing top-notch cleaning solutions for commercial and residential
        properties. With a dedication to excellence and a passion for
        cleanliness, <span className="text-customGolden">we deliver tailored cleaning services that exceed
        expectations.</span> Our comprehensive range of services ensures that every
        client receives customized solutions to meet their unique needs.
      </p>
    </motion.div>
  );
};

export default Banner;
