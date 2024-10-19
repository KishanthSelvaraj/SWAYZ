import React from "react";
import logo from "/cleaningImages/logo.jpg";
import { BsTelephone } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { ImLocation } from "react-icons/im";

const Footer = () => {
  return (
    <div>
      <div className="md:py-10 py-5">
      <div className="md:px-10 px-5 pb-5 text-center text-customGolden md:text-3xl text-xl font-bold">
        GET IN TOUCH
        <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-customGolden rounded-full"></div>

        </div>
        <div className="flex flex-col md:flex-row md:justify-evenly items-center">
          <div className=" md:mx-0 mx-8 py-5">
            <img src={logo} alt="" className="w-32 md:w-40" />
          </div>
          <div className="flex flex-col px-10  lg:flex-row gap-y-5 gap-x-10 justify-center">
            <div className="flex  items-center gap-x-5">
              <div className="border p-2 rounded-full bg-customGolden">
                <BsTelephone className="w-5 h-auto text-white" />
              </div>
              <div className="md:text-base text-sm  font-semibold text-customGrey">010 006 5983</div>
            </div>
            <div className="flex  items-center gap-x-5">
              <div className="border p-2 rounded-full bg-customGolden">
                <TfiWorld className="w-5 h-auto text-white" />
              </div>
              <div>
                <div className="md:text-base text-sm  font-semibold text-customGrey">info@swayzgroup.co.za</div>
                <div className="md:text-base text-sm  font-semibold text-customGrey">www.swayzgroup.co.za</div>
              </div>
            </div>
            <div className="flex  items-center gap-x-5">
              <div className="border p-2 rounded-full bg-customGolden">
                <ImLocation className="w-5 h-auto text-white" />
              </div>
              <div className="md:text-base text-sm  font-semibold text-customGrey">120 11th Street, Parkmore Sandton, 2196</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
