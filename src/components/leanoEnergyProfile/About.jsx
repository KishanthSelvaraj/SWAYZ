import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import about_1 from "/leanoEnergyProfile/about_1.jpeg";
import logo from "/leanoEnergyProfile/leanoenergylogo.png"; // Update this path to your logo

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
      <img src={logo} alt="Company Logo" className="mb-4 h-24 w-auto" />
      <p className="mb-2 text-center text-md md:text-xl font-semibold text-white">
        {subheading}
      </p>
      <p className="text-center text-xl md:text-3xl font-semibold text-white">
        {heading}
      </p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto max-w-5xl px-4 pb-24 pt-12">
    <h2 className="text-md md:text-3xl text-xl mb-3 font-bold text-black">
      ABOUT LEANO ENERGY
    </h2>
    <p className="mb-4 text-md font-semibold text-customGrey md:mt-6">
      It is believed that a countries future is in the hands of its youth and
      with that said, this company opens doors to broaden that horizon. There is
      still much to learn from the elders and yet so much to improve in binary
      thinking. Being a youth owned company we delight in innovative ideas,
      design thinking and formatting ideation that isn’t the norm to business as
      the market is constantly evolving and changing.
    </p>
    <p className="mb-4 text-md font-semibold text-customGrey">
    Leano Energy is a LEVEL 1 BBBEE contributor, with the company being 100% 
black youth owned it allows the company a platform to have a new outlook on 
the market and come up with innovative and exciting ideas of not only 
lowering cost but design comprehensive marketing .We are a licensed 
wholesale and distributor in bulk fuels, diesel, paraffin, oils and various 
lubricants. The company provides its products to clients in Gauteng, 
Mpumalanga, Limpopo and the North West province. Leano Energy offers 
energy solutions to all industries including mining, agriculture, logistics, 
airports, factories and municipalities to ensure profitable growth.
    </p>
    <p className="mb-8 text-md font-semibold text-customGrey">
    We include fuel management service where tanks are installed on site for the 
clients and how much fuel they use on a monthly basis is monitored and 
ensured to always get re-fueled on time and efficiently. Through this 
management system as well as our tailored prices are guaranteed to cut our 
clients fuel cost while providing quality products. 
    </p>
  </div>
);

export default About;
