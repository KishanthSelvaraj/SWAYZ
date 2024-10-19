import React from "react";
import { motion } from "framer-motion";
import infrastructure_1 from "/leanoEnergyProfile/infrastructure_1.jpeg";

const Infrastructure = () => {
  return (
    <motion.div
      className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <img
        src={infrastructure_1}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        style={{ objectPosition: "center 70%" }}
      />
      <div className="absolute inset-0 bg-black opacity-70 -z-10"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {" "}
        {/* Centering content */}
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-customGolden md:text-4xl">
            INFRASTRUCTURE
          </h2>
        </div>
      </div>

      <div className="mx-auto md:mt-16 mt-8 max-w-7xl px-6 lg:px-8 text-center">
        {" "}
        {/* Centering paragraph */}
        <div className="max-w-4xl mx-auto">
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Part of the services offered at Leano Energy is installation of new
            and reconditioned diesel storage tanks and bowsers on our clients
            premises for their convenience. We install above ground tanks in all
            sizes, we cater to any specification that our clients require. All
            our diesel tanks are coupled with pump sets.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Infrastructure;
