import React from "react";
import { motion } from "framer-motion";
import productsandservices_1 from "/leanoEnergyProfile/productsandservices_1.webp";
import productsandservices_2 from "/leanoEnergyProfile/productsandservices_2.webp";
import productsandservices_3 from "/leanoEnergyProfile/productsandservices_3.png";
import productsandservices_4 from "/leanoEnergyProfile/productsandservices_4.webp";

const ProductsandServices = () => {
  const products = [
    {
      name: "Petrol Unleaded",
      description: "(93, 95 ULP)",
      image: productsandservices_1,
    },
    {
      name: "Diesel",
      description: "(500PPM, 50PPM)",
      image: productsandservices_2,
    },
    {
      name: "Illuminating Paraffin",
      description: "",
      image: productsandservices_3,
    },
    {
      name: "Oils and Lubrications",
      description: "",
      image: productsandservices_4,
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-bold text-black md:pb-5"
          >
            PRODUCTS & SERVICES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-5 text-customGrey md:text-lg text-sm font-semibold"
          >
            Leano Energy has established relationships with major refineries
            within South Africa such as Sasol, Shell, BP, Engen, and Chevron.
            Our supplier relationships has provided us the capacity to provide
            large volumes of all products, this allows us to ensure that all our
            clients needs are met and at the best possible prices. Our price
            monitoring system enables us to source products at highly completive
            prices which in turn enables us to distribute it to our clients at
            comparatively low margins.{" "}
          </motion.p>
        </div>

        <div className="grid max-w-4xl grid-cols-1 gap-y-12 mt-12 sm:grid-cols-2 gap-x-10 lg:gap-x-14 mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: 10 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <motion.img
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                className="object-cover w-full h-56 rounded-t-lg"
                src={product.image}
                alt={product.name}
              />
              <div className="p-6 bg-gray-50 rounded-b-lg">
                <h3 className="text-xl font-bold text-black">{product.name}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsandServices;
