import logo from "../../assets/logo.jpeg";
import about_1 from "../../assets/background.jpg";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const SwayzMain = () => {
  return (

    <div className="bg-white">
    <TextParallaxContent
      imgUrl={about_1}
      heading="Swayz Group"
      subheading="Our expertise in general building encompasses various types of construction
projects, including residential, commercial, and industrial buildings."
    >
      <ExampleContent />
    </TextParallaxContent>
  </div>
    // <div
    //   className="relative min-h-screen bg-cover bg-center bg-no-repeat"
    //   style={{ backgroundImage: `url(${background})` }}
    // >
    //   <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
    //   <div className="relative flex flex-col justify-center items-center min-h-screen gap-y-10 px-5">
    //     <div className="flex justify-center items-center">
    //       {/* {<div className="flex text-46px font-bold justify-center  items-center gap-x-5 font-khand">SWAYZ <span className="text-customGolden">GROUP</span></div> } */}
    //       <img src={logo} alt="logo" className="h-36 w-auto md:h-52 rounded-lg" />
    //     </div>
    //     <div className="flex flex-col space-y-5 text-white max-w-4xl">
    //       <div className="text-justify">
    //         Swayz Group is a Gauteng-based construction company that specializes in General Building, Electrical engineering works, Civil Engineering, and Landscaping, Irrigation, and horticulture works. With a team of experienced professionals, Swayz Group is committed to delivering high-quality construction solutions that meet the needs and exceed the expectations of our clients.
    //       </div>
    //       <div className="text-justify hidden md:block">
    //         Our expertise in general building encompasses various types of construction projects, including residential, commercial, and industrial buildings.
    //       </div>
    //       <div className="text-justify hidden md:block">
    //         With our electrical engineering works, we offer comprehensive electrical solutions for both new construction projects and existing structures, ensuring safety and efficiency. In addition to our general building and electrical engineering services, our civil engineering division undertakes projects such as road construction, structural design, and infrastructure development.
    //       </div>
    //       <div className="text-justify">
    //         We understand the importance of creating sustainable and eco-friendly environments, which is why our company also offers landscaping, irrigation, and horticulture services.
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
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
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
      <p className="text-center text-3xl my-5 font-bold md:text-5xl">{heading}</p>
      <p className="mb-2 text-center text-lg md:mb-4 md:text-2xl">
        {subheading}
      </p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto max-w-5xl px-4 my-10 mb-20">
    <h2 className="text-xl flex justify-center font-bold md:text-3xl">Executive Summary</h2>
    <p className="mb-4 text-sm text-neutral-600 text-justify mt-6">
      Swayz Group is a Gauteng-based construction company that specializes in
      General Building, Electrical engineering works, Civil Engineering, and
      Landscaping, Irrigation, and horticulture works. With a team of
      experienced professionals, Swayz Group is committed to delivering
      high-quality construction solutions that meet the needs and exceed the
      expectations of our clients.
    </p>
    <p className="mb-4 text-sm text-neutral-600 text-justify">
      With our electrical engineering works, we offer comprehensive electrical
      solutions for both new construction projects and existing structures,
      ensuring safety and efficiency. In addition to our general building and
      electrical engineering services, our civil engineering division undertakes
      projects such as road construction, structural design, and infrastructure
      development.
    </p>
    <p className="mb-8 text-sm text-neutral-600 text-justify">
      We understand the importance of creating sustainable and eco-friendly
      environments, which is why our company also offers landscaping,
      irrigation, and horticulture services.
    </p>
  </div>
);

export default SwayzMain;
