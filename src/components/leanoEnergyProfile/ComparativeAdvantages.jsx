import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ComparativeAdvantages_1 from '/leanoEnergyProfile/ComparativeAdvantages_1.jpg'
import ComparativeAdvantages_2 from '/leanoEnergyProfile/ComparativeAdvantages_2.jpg'
import ComparativeAdvantages_3 from '/leanoEnergyProfile/ComparativeAdvantages_3.jpg'


const ComparativeAdvantages = () => {
  const refCard1 = useRef(null);
  const refCard2 = useRef(null);
  const refCard3 = useRef(null);

  const inViewCard1 = useInView(refCard1, { once: false });
  const inViewCard2 = useInView(refCard2, { once: false });
  const inViewCard3 = useInView(refCard3, { once: false });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-20">
      {/* Container for the content */}
      <div className="w-full max-w-7xl mx-auto px-5">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-black pb-10">
          COMPARATIVE ADVANTAGES
        </h2>

        {/* Grid layout for the cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4">
          {/* First column with one card */}
          <motion.div
            ref={refCard1}
            className="flex flex-col md:flex-row bg-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inViewCard1 ? 1 : 0, y: inViewCard1 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={
                ComparativeAdvantages_1
              }
              alt="Innovative Renewable Energy"
              className="w-full md:w-1/3 h-auto object-contain mb-4 md:mb-0 md:mr-4"
            />
            <div className="flex justify-center flex-col">
              <h3 className="text-xl font-semibold mb-4">
                Innovative Renewable Energy
              </h3>
              <p className="text-customGrey">
                We are a one-stop shop providing all energies needed to function
                and with that said, we also provide blended bio-fuel which is an
                innovative and renewable source of energy which is less harmful
                to the environment yet cleaner and safer for engines to use.
              </p>
            </div>
          </motion.div>

          {/* Second column with two cards in two rows */}
          <div className="flex flex-col justify-between">
            <motion.div
              ref={refCard2}
              className="flex flex-col md:flex-row bg-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: inViewCard2 ? 1 : 0,
                y: inViewCard2 ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img
                src={ComparativeAdvantages_2}
                alt="Timely Deliveries"
                className="w-full md:w-1/3 h-auto object-cover mb-4 md:mb-0 md:mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Timely Deliveries</h3>
                <p className="text-customGrey">
                  At Leano Energy, we ensure all deliveries are done on time and
                  in the best possible manner. Our clients derive great value
                  from our fuel and lubrication solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              ref={refCard3}
              className="flex flex-col md:flex-row bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: inViewCard3 ? 1 : 0,
                y: inViewCard3 ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src={ComparativeAdvantages_3}
                alt="Effective Fuel Management"
                className="w-full md:w-1/3 h-auto object-cover mb-4 md:mb-0 md:mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Effective Fuel Management
                </h3>
                <p className="text-customGrey">
                  Installing our fuel management solution has clear benefits,
                  including effective live monitoring, reporting, and management
                  with an accuracy of 99% or better.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparativeAdvantages;
