import logo from "../../assets/logo.jpeg";
import about_1 from "../../assets/video2.mp4"; // Correct path to the video
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const SwayzMain = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        videoUrl={about_1}  // Pass videoUrl instead of imgUrl
        heading="Swayz Group"
        subheading="Our expertise in general building encompasses various types of construction
projects, including residential, commercial, and industrial buildings."
      >
        <ExampleContent />
      </TextParallaxContent>
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
      <div className="relative h-[150vh]">
        <StickyVideo videoUrl={videoUrl} /> {/* Adjust for StickyVideo */}
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

// This component now handles a video instead of an image
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
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
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
      <img
        src={logo}
        alt="Company Logo"
        className="mb-4 h-24 w-auto"
      />
      <p className="text-center uppercase text-xl text-customGolden my-5 font-bold md:text-4xl">{heading}</p>
      <p className="text-center text-lg font-normal md:text-xl px-2 md:px-20 lg:px-40">
      Our expertise in general building encompasses various types of construction
      projects, including <span className="text-customGolden">residential</span>, <span className="text-customGolden">commercial</span>, and <span className="text-customGolden">industrial buildings.</span>
      </p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto max-w-5xl px-4 my-10 mb-20">
          <div className="md:px-10 px-5 text-center text-customGolden md:text-3xl text-xl font-bold">
            EXCLUSIVE SUMMARY
            <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-customGolden rounded-full"></div>
          </div>
    <p className="mb-4 text-sm md:text-base text-neutral-600 text-justify mt-10">
      Swayz Group is a Gauteng-based construction company that specializes in
      General Building, Electrical engineering works, Civil Engineering, and
      Landscaping, Irrigation, and horticulture works. With a team of
      experienced professionals, Swayz Group is committed to delivering
      high-quality construction solutions that meet the needs and exceed the
      expectations of our clients.
    </p>
    <p className="mb-4 text-sm md:text-base text-neutral-600 text-justify">
      With our electrical engineering works, we offer comprehensive electrical
      solutions for both new construction projects and existing structures,
      ensuring safety and efficiency. In addition to our general building and
      electrical engineering services, our civil engineering division undertakes
      projects such as road construction, structural design, and infrastructure
      development.
    </p>
    <p className="mb-8 text-sm md:text-base text-neutral-600 text-justify">
      We understand the importance of creating sustainable and eco-friendly
      environments, which is why our company also offers landscaping,
      irrigation, and horticulture services.
    </p>
  </div>
);

export default SwayzMain;
