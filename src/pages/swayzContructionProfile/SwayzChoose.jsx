import React from 'react';
import { motion } from 'framer-motion';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';

// Bounce in from the left animation
const bounceLeftToRight = {
  hidden: { opacity: 0, x: -100 }, // Initially hidden and shifted left
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300 } }, // Visible with bounce effect
};

const SwayzChoose = () => {
  return (
    <div>
      <div>
        {/* Section title */}
        <div className="flex justify-center text-xl md:text-3xl font-bold my-10">
          Why Choose..?
        </div>

        {/* Introductory text */}
        <motion.div
          className="mx-4 md:mx-10 lg:text-xl text-lg font-semibold text-justify p-4 rounded-lg" // Added background color and padding
          initial="hidden"
          whileInView="visible"
          variants={bounceLeftToRight}
          transition={{ duration: 0.7 }}
        >
          By collaborating with designers and engineers, we are able to
          incorporate innovative and sustainable design elements into our
          projects, resulting in better overall outcomes.
        </motion.div>

        {/* First section with image and text */}
        <motion.div
          className="lg:flex p-10"
          initial="hidden"
          whileInView="visible"
          variants={bounceLeftToRight}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <div className="flex items-center text-sm md:text-base max-w-5xl lg:px-10 text-justify  p-4 rounded-lg shadow-md">
            Choosing Swayz Group for your construction needs brings numerous
            advantages. One of our key organizational strategies is the
            capability to offer a low price for construction services. This
            allows us to provide cost-effective solutions without compromising
            on quality.
          </div>
          <div>
            <img
              src={image1}
              alt="Construction Image 1"
              className="lg:w-[80vh] xl:w-[40vh] rounded-lg"
            />
          </div>
        </motion.div>

        {/* Second section with image and text */}
        <motion.div
          className="lg:flex p-10"
          initial="hidden"
          whileInView="visible"
          variants={bounceLeftToRight}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <div className="flex items-center text-sm md:text-base lg:max-w-3xl xl:max-w-5xl lg:px-10 text-justify p-4 rounded-lg shadow-md">
            Furthermore, our commitment to sustainable construction sets us
            apart. We understand the importance of adopting sustainable
            development principles in construction. By considering
            sustainability in our construction practices, we minimize the
            environmental impact of our projects. Meanwhile, the encouraged
            cooperation of designer and engineer would bring better design into
            the construction phase.
          </div>
          <div>
            <img
              src={image2}
              alt="Construction Image 2"
              className="lg:w-[80vh] xl:w-[40vh] rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SwayzChoose;
