import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ComparativeAdvantages_1 from '/leanoEnergyProfile/ComparativeAdvantages_1.jpeg'

const ComparativeAdvantages = () => {
  const ref = useRef(null);
  
  const inView = useInView(ref, { once: false });

  return (
    <div className="py-20 flex flex-col items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 md:bg-contain bg-cover bg-center"
        style={{
          backgroundImage: `url(${ComparativeAdvantages_1})`,
        }}
      />
      
      <div className="absolute inset-0 bg-black opacity-75" />

      <div className="relative z-10 p-5">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-white pb-10">COMPARATIVE ADVANTAGES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 max-w-3xl mx-auto">
          <motion.div
            ref={ref}
            className="flex flex-col justify-center bg-white p-5 shadow-md rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Innovative Renewable Energy</h3>
            <p className="text-gray-700">
              Leano Energy provides blended bio-fuel, a cleaner and safer energy source. This innovative renewable option is less harmful to the environment, addressing the urgent issue of global warming.
            </p>
          </motion.div>

          <div className="flex flex-col justify-between">
            <motion.div
              ref={ref}
              className="bg-white p-5 shadow-md rounded-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">Timely Deliveries</h3>
              <p className="text-gray-700">
                We work closely with local accredited logistic entities to ensure all deliveries are timely and efficient. Our goal is to maximize the value of our fuel and lubrication solutions for clients.
              </p>
            </motion.div>
            <motion.div
              ref={ref}
              className="bg-white p-5 shadow-md rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">Effective Fuel Management</h3>
              <p className="text-gray-700">
                Our fuel management solutions offer significant benefits to operations managers. With effective live monitoring and management, users can expect accuracy rates of 99% or better, streamlining fuel expenditure.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparativeAdvantages;
