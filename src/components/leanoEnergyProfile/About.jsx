import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import about_1 from '/leanoEnergyProfile/about_1.jpeg';
import logo from '/leanoEnergyProfile/leanoenergylogo.png'; // Update this path to your logo

const About = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl={about_1}
        subheading="Reliable Fuel Solutions"
        heading="Empowering Industries with Energy"
      >
        <ExampleContent />
      </TextParallaxContent>
    </div>
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
      <p className="mb-2 text-center text-lg md:mb-4 md:text-2xl">
        {subheading}
      </p>
      <p className="text-center text-3xl font-bold md:text-5xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto max-w-5xl px-4 pb-24 pt-12">
    <h2 className="text-2xl font-bold md:text-4xl">ABOUT LEANO ENERGY</h2>
    <p className="mb-4 text-lg text-neutral-600 md:text-xl mt-6">
      It is believed that a country's future is in the hands of its youth and
      with that said, this company opens doors to broaden that horizon. Being a
      youth-owned company, we delight in innovative ideas, design thinking, and
      formatting ideation that isn't the norm to business as the market is
      constantly evolving and changing.
    </p>
    <p className="mb-4 text-lg text-neutral-600 md:text-xl">
      Leano Energy is a LEVEL 1 BBBEE contributor, with the company being 100%
      black youth-owned. We are a licensed wholesale and distributor in bulk
      fuels, diesel, paraffin, oils, and various lubricants. The company
      provides its products to clients in Gauteng, Mpumalanga, Limpopo, and the
      North West province.
    </p>
    <p className="mb-8 text-lg text-neutral-600 md:text-xl">
      We offer energy solutions to all industries, including mining,
      agriculture, logistics, airports, factories, and municipalities to ensure
      profitable growth. Through our fuel management service, we monitor usage
      to ensure timely refueling, cutting costs while providing quality
      products.
    </p>
  </div>
);

export default About;
