import React from "react";
import { motion } from "framer-motion";

// Variants for animation
const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeInOut" } },
};

const SwanVision = () => {
  return (
    <div
      className="relative px-5 py-10 bg-cover bg-center min-h-fit"
      style={{ backgroundImage: "url('https://swayzgroup.co.za/wp-content/uploads/2024/05/Downloader.la-64ae9cc62f5f3.jpg')" }} // Update the path to your background image
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div
        className="relative font-bold text-xl md:text-2xl lg:text-3xl my-10 text-center text-white z-10"
        initial="hidden"
        animate="visible"
        viewport={{ once: false }}
        variants={containerVariants}
      >
        Our Goals and Values
      </motion.div>

      {/* Cards with Framer Motion */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 justify-evenly gap-10 md:px-20 xl:px-40 z-10">
        {/* Vision Card */}
        <motion.div
          className="flex flex-col border h-full p-10 space-y-5 rounded-lg hover:bg-customGrey2 duration-300 transform hover:scale-105 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-lg md:text-xl font-bold text-center transition-transform duration-300 hover:scale-110 text-customGolden">
            OUR VISION
          </div>
          <div className="text-justify text-sm md:text-sm">
            Our vision at Swayz Group is to be a trusted and leading construction
            company in Gauteng, known for our exceptional quality, innovation, and
            reliability in delivering construction solutions that enhance the built environment.
          </div>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          className="flex flex-col border h-full p-10 space-y-5 rounded-lg hover:bg-customGrey2 duration-300 transform hover:scale-105 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-lg md:text-xl font-bold text-center transition-transform duration-300 hover:scale-110 text-customGolden">
            OUR MISSION
          </div>
          <div className="text-justify text-sm md:text-sm">
            Provide our clients with the highest level of construction services by
            utilizing the latest technology, adopting innovative construction methods,
            and adhering to strict quality standards.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SwanVision;
