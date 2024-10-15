import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Banner = () => {
  const [showContent, setShowContent] = useState(false); // State to manage content visibility
  const controls = useAnimation(); // Animation controls for the title

  useEffect(() => {
    // Start title animation and show content after a delay
    const animateTitleAndContent = async () => {
      // Animate the title in from the left
      await controls.start({ x: 0, opacity: 1 });

      // Set showContent to true after title animation
      setShowContent(true);
    };

    // Trigger the animation
    animateTitleAndContent();
  }, [controls]);

  return (
    <div className="bg-black">
      <div className="relative">
        <div className="w-full bg-black opacity-90">
          <img
            src="/cleaningImages/CleaningBanner.jpg"
            alt="cleaning service"
            className="w-full md:h-[45vh] h-[60vh] object-cover"
          />
        </div>
        <div className="flex justify-center items-center font-bold md:h-[45vh] h-[60vh] absolute top-0 left-0 w-full bg-black bg-opacity-70 text-white">
          <div className="text-center text-md lg:mx-40 mx-5">
            <motion.p
              className="text-customGolden uppercase md:text-3xl text-xl whitespace-nowrap"
              initial={{ x: -100, opacity: 0 }} // Initial state off-screen
              animate={controls} // Animation controls
              transition={{ duration: 0.7, ease: "easeIn" }} // Animation properties
            >
              Swayz Cleaning Services
            </motion.p>

            {showContent && ( // Conditional rendering of content
              <motion.div
                initial={{ opacity: 0 }} // Initial state (hidden)
                animate={{ opacity: 1 }} // End state (visible)
                transition={{ duration: 0.2, delay: 0.2 }} // Fade in with a delay
                className="mt-5"
              >
                <div>
                  Swayz Cleaning Services is a division of the{" "}
                  <span className="text-customGolden text-lg">Swayz Group</span>
                  , committed to providing top-notch cleaning solutions for
                  commercial and residential properties. With a dedication to
                  excellence and a passion for cleanliness, we deliver tailored
                  cleaning services that exceed expectations.
                </div>
                <div>
                  Our comprehensive range of services ensures that every client
                  receives customized solutions to meet their unique needs.
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
