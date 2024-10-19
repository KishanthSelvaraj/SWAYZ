import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaMoneyBillWave, FaLeaf, FaProjectDiagram } from "react-icons/fa";

// Bounce in from the left animation
const bounceLeftToRight = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300 } },
};

const SwayzChoose = () => {
  return (
    <div className="py-20 min-h-fit mb-5">
      <div className="container mx-auto px-5 md:px-10 lg:px-16">
        {/* Section title */}
        <div className="md:px-10 px-5 text-center text-customGolden md:text-3xl text-xl font-bold">
          WHY CHOOSE SWAYZ
          <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-customGolden rounded-full"></div>
        </div>

        {/* Card container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 mt-10">
          {/* Card 1 */}
          <motion.div
            className="bg-white border-2 border-[#DAA520] p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            variants={bounceLeftToRight}
            transition={{ duration: 0.7 }}
          >
            <FaTools className="text-4xl text-[#DAA520] mb-4 mx-auto" />
            <p className="text-justify text-sm md:text-base ">
              Choosing Swayz Group for your construction needs brings numerous
              advantages. One of our key organizational strategies is the
              capability to offer a low price for construction services.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white border-2 border-[#DAA520] p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            variants={bounceLeftToRight}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <FaMoneyBillWave className="text-4xl text-[#DAA520] mb-4 mx-auto" />
            <p className="text-justify text-sm md:text-base ">
              This allows us to provide cost-effective solutions without
              compromising on quality. Furthermore, our commitment to
              sustainable construction sets us apart. We understand the
              importance of adopting sustainable development principles in
              construction.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white border-2 border-[#DAA520] p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            variants={bounceLeftToRight}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <FaLeaf className="text-4xl text-[#DAA520] mb-4 mx-auto" />
            <p className="text-justify text-sm md:text-base ">
              By considering sustainability in our construction practices, we
              minimize the environmental impact of our projects. Meanwhile, the
              encouraged cooperation of designer and engineer would bring better
              design into the construction phase.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="bg-white border-2 border-[#DAA520] p-4  rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            variants={bounceLeftToRight}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <FaProjectDiagram className="text-4xl text-[#DAA520] mb-4 mx-auto" />
            <p className="text-justify text-sm md:text-base ">
              By collaborating with designers and engineers, we are able to
              incorporate innovative and sustainable design elements into our
              projects, resulting in better overall outcomes.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SwayzChoose;
