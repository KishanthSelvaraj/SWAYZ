import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaCheckCircle,
  FaDraftingCompass,
  FaTools,
} from "react-icons/fa";
const Main1 = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <div className=" md:-mt-10 md:pb-20 pb-10 px-5 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-customGolden">
          Our Construction Process
        </h2>
        <p className="mt-6 text-gray-700 text-lg">
          From concept to completion, we follow a seamless construction process
          to deliver quality results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {/* Step 1: Planning */}
          <motion.div
            className="relative text-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://image.slidesdocs.com/responsive-images/background/3d-render-of-construction-site-featuring-residential-building-crane-and-excavator-powerpoint-background_ecf30e9cd2__960_540.jpg")',
            }}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: false }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Content */}
            <div className="relative z-10">
              <FaDraftingCompass className="text-5xl text-[#DAA520] mb-4 mx-auto" />
              <h3 className="text-lg font-bold">Step 1: Planning & Design</h3>
              <p className="mt-2 text-white">
                Our expert team collaborates with clients to draft precise
                plans, blueprints, and designs.
              </p>
            </div>
          </motion.div>

          {/* Step 2: Pre-Construction */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: false }}
          >
            <FaTools className="text-5xl text-[#DAA520] mb-4 mx-auto" />
            <h3 className="text-lg font-bold">Step 2: Pre-Construction</h3>
            <p className="mt-2 text-gray-600">
              We secure permits, source materials, and prepare the construction
              site efficiently.
            </p>
          </motion.div>

          {/* Step 3: Construction */}
          <motion.div
            className="relative text-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://image.slidesdocs.com/responsive-images/background/3d-render-of-construction-site-featuring-residential-building-crane-and-excavator-powerpoint-background_ecf30e9cd2__960_540.jpg")',
            }}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: false }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10">
              <FaBuilding className="text-5xl text-[#DAA520] mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white">
                Step 3: Construction
              </h3>
              <p className="mt-2 text-white">
                Our team gets to work on-site, using advanced methods to ensure
                the highest quality construction.
              </p>
            </div>
          </motion.div>

          {/* Step 4: Completion */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: false }}
          >
            <FaCheckCircle className="text-5xl text-[#DAA520] mb-4 mx-auto" />
            <h3 className="text-lg font-bold">Step 4: Final Delivery</h3>
            <p className="mt-2 text-gray-600">
              Upon completion, we conduct thorough quality checks and hand over
              the project on time.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main1;
