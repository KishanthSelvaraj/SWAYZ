import React, { useRef } from "react";
import { FaCheckCircle, FaBuilding, FaMoneyBillWave } from "react-icons/fa";
import backgroundImage from "../../assets/image1.jpg";

const Main2 = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);
  const buttonRef = useRef(null);

  return (
    <div>
      <div
        className="relative bg-cover bg-center h-[78vh] my-10 md:mx-20 lg:mx-26 mx-5 rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay Div */}
        <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>

        {/* Content Wrapper with Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 z-20 absolute top-5 left-5 w-full h-full">
          {/* Title and Description */}
          <div className="flex flex-col justify-center p-5 md:p-10 max-w-5xl">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white">
              Build Your Dream Projects with{" "}
              <span className="text-customGolden">SWAYZ Construction</span>
            </h1>
            <p className="text-lg md:text-2xl lg:text-4xl text-white mt-2">
              Premium construction solutions tailored to your vision.
            </p>
            <button className="bg-yellow-700 mt-5 w-fit hover:bg-yellow-800 font-semibold text-white px-4 py-2 rounded-lg text-lg transition-transform duration-300 transform hover:scale-105">
              Explore More
            </button>
          </div>

          {/* Stats Cards */}
          <div className=" flex-col xl:flex hidden justify-center items-center space-y-4 md:space-y-8">
            {/* Single card for Cost-Effective Solutions */}
            <div className="bg-white text-black rounded-full px-6 py-2 shadow-md flex justify-center items-center gap-2 hover:shadow-lg transition-shadow duration-300 w-fit">
              <FaMoneyBillWave size={20} />
              <h3 className="text-xl font-bold">Cost-Effective Solutions</h3>
            </div>

            {/* Row for the other two cards */}
            <div className="flex flex-col sm:flex-row justify-center gap-2 w-full">
              <div className="bg-white text-black rounded-full px-6 py-2 shadow-md flex items-center gap-2 hover:shadow-lg transition-shadow duration-300 w-fit">
                <FaBuilding size={20} />
                <h3 className="text-xl font-bold">500+ Projects</h3>
              </div>
              <div className="bg-white text-black rounded-full px-6 py-2 shadow-md flex items-center gap-2 hover:shadow-lg transition-shadow duration-300 w-fit">
                <FaCheckCircle size={20} />
                <h3 className="text-xl font-bold">Sustainable Solution</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main2;
