import React from "react";
import { FaBolt, FaRecycle, FaLeaf, FaEye } from "react-icons/fa";

const Benefits = () => {
  return (
    <div className="flex bg-yellow-50 bg-opacity-30 justify-center items-center w-full px-4 md:pb-14 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Efficiency Card */}
        <div className="relative cursor-pointer ">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-customGolden rounded-lg"></span>
          <div className="relative p-6 bg-white  border-2 border-customGolden rounded-lg hover:scale-105 transition duration-500">
            <div className="flex items-center">
              <FaBolt className="text-customGolden text-2xl" />
              <h3 className="my-2 ml-3 md:text-xl text-lg font-bold text-gray-800 ">
                Efficiency
              </h3>
            </div>
            <p className="text-customGrey font-semibold md:text-base  text-sm">
              High-pressure cleaning offers quick and efficient cleaning of
              large surface areas, saving time and labor costs compared to
              traditional cleaning methods.
            </p>
          </div>
        </div>

        {/* Enhanced Curb Appeal Card */}
        <div className="relative cursor-pointer ">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-customGolden rounded-lg"></span>
          <div className="relative p-6 bg-white  border-2 border-customGolden rounded-lg hover:scale-105 transition duration-500">
            <div className="flex items-center">
              <FaEye className="text-customGolden text-2xl" />
              <h3 className="my-2 ml-3 md:text-xl text-lg font-bold text-gray-800 ">
                Enhanced Curb Appeal
              </h3>
            </div>
            <p className="text-customGrey font-semibold md:text-base text-sm text-sm">
              High-pressure cleaning revitalizes exterior surfaces, removing
              dirt, stains and grime to enhance the appearance and curb appeal
              of properties.
            </p>
          </div>
        </div>

        {/* Versatility Card */}
        <div className="relative cursor-pointer ">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-customGolden rounded-lg"></span>
          <div className="relative p-6 bg-white  border-2 border-customGolden rounded-lg hover:scale-105 transition duration-500">
            <div className="flex items-center">
              <FaRecycle className="text-customGolden text-2xl" />
              <h3 className="my-2 ml-3 md:text-xl text-lg font-bold text-gray-800 ">
                Versatility
              </h3>
            </div>
            <p className="text-customGrey font-semibold md:text-base text-sm">
              Our high-pressure cleaning equipment can be used on a variety of
              surfaces, including concrete, and more, making it suitable
              for a wide range of cleaning applications.
            </p>
          </div>
        </div>

        {/* Environmentally Friendly Card */}
        <div className="relative cursor-pointer ">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-customGolden rounded-lg"></span>
          <div className="relative p-6 bg-white  border-2 border-customGolden rounded-lg hover:scale-105 transition duration-500">
            <div className="flex items-center">
              <FaLeaf className="text-customGolden text-2xl" />
              <h3 className="my-2 ml-3 md:text-xl text-lg font-bold text-gray-800 ">
                Environmentally Friendly
              </h3>
            </div>
            <p className="text-customGrey font-semibold md:text-base text-sm">
              Our high- pressure cleaning process uses only water and
              eco-friendly cleaning solutions, minimizing the use of harsh
              chemicals and reducing environmental impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
